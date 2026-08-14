#!/usr/bin/env python3
"""Convert ThreatCrush terminal output to SARIF 2.1.0.

Compatibility shim for CLI versions older than native ``--format sarif``.
When the CLI can emit SARIF itself the workflow uses that and never runs this
file; parsing a human-readable stream is strictly worse and exists only so a
repository is not left unscanned while waiting for a release.

It **fails closed**. If it cannot recognise the output it exits non-zero and
dumps what it saw. Emitting empty SARIF instead would report "0 findings",
which is indistinguishable from a clean scan and is the single most expensive
thing a security tool can get wrong.

Three details of the format, each of which is load-bearing:

* Severity is bare for ``CRITICAL`` and bracketed for ``[HIGH]``/``[MEDIUM]``/
  ``[LOW]``. One regex shape misses half the findings.
* ``File:`` paths are relative to the scan root, not the repository root. Left
  unprefixed, every finding resolves to nothing in the consumer's view of the
  repo. Hence ``--path-prefix``.
* Whole-file findings report line ``:0``. SARIF requires ``startLine >= 1``.

``Code:`` lines are redacted excerpts of the match. They are skipped rather
than parsed, both because matching them would double-count every finding and
because a redacted excerpt tells a reader nothing the ``Info:`` line does not.
"""

from __future__ import annotations

import argparse
import json
import re
import sys

ANSI = re.compile(r"\x1b\[[0-9;]*[A-Za-z]")

# `   CRITICAL  AWS Access Key`  /  `  [HIGH] Sensitive File`
SEVERITY_LINE = re.compile(r"^\s*(?:\[(CRITICAL|HIGH|MEDIUM|LOW|INFO)\]|(CRITICAL))\s+(.+?)\s*$")
FILE_LINE = re.compile(r"^\s*File:\s*(.+?):(\d+)\s*$")
INFO_LINE = re.compile(r"^\s*Info:\s*(.+?)\s*$")

# Proof that a scan ran to completion. Without one of these we are looking at a
# crash, a help screen, or an unrecognised release — never at a clean result.
FOOTER = re.compile(
    r"^\s*(?:(?P<count>\d+)\s+issue\(s\)\s+found|.*No security issues found)"
)

LEVELS = {"CRITICAL": "error", "HIGH": "error", "MEDIUM": "warning", "LOW": "note", "INFO": "none"}
SECURITY_SEVERITY = {"CRITICAL": "9.0", "HIGH": "7.0", "MEDIUM": "5.0", "LOW": "3.0", "INFO": "1.0"}
RANK = {"info": 0, "low": 1, "medium": 2, "high": 3, "critical": 4}


class Unrecognised(Exception):
    """The output did not look like a completed ThreatCrush scan."""


def rule_id(title: str) -> str:
    """Derive a stable rule id from a finding title.

    Old CLIs print `AWS Access Key`, not `secret-aws-access-key`. Slugifying
    keeps SARIF results groupable and keeps fingerprints stable across runs,
    which is what stops the Security tab treating every run as brand-new alerts.
    """
    slug = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")
    return f"threatcrush-{slug}" if slug else "threatcrush-finding"


def parse(text: str) -> list[dict]:
    lines = ANSI.sub("", text).splitlines()
    footer = next((m for line in lines if (m := FOOTER.match(line))), None)
    if footer is None:
        raise Unrecognised("no scan-completion footer found")
    # "No security issues found" has no number; that branch means zero.
    expected = int(footer.group("count") or 0)

    findings: list[dict] = []
    pending: dict | None = None

    for line in lines:
        severity_match = SEVERITY_LINE.match(line)
        if severity_match:
            severity = severity_match.group(1) or severity_match.group(2)
            pending = {"severity": severity.upper(), "title": severity_match.group(3).strip()}
            continue

        if pending is None:
            continue

        file_match = FILE_LINE.match(line)
        if file_match:
            pending["file"] = file_match.group(1).strip()
            pending["line"] = int(file_match.group(2))
            continue

        info_match = INFO_LINE.match(line)
        if info_match and "file" in pending:
            pending["message"] = info_match.group(1).strip()
            findings.append(pending)
            pending = None

    # Fail closed on anything left half-read.
    #
    # A footer proves the scan finished. It does not prove this converter
    # understood what the scan printed. A finding whose Info: line moved, or
    # whose block gained a field, is dropped silently here — the next severity
    # line overwrites `pending` and nobody hears about it. The workflow then
    # reports a clean or under-counted scan, which is the failure this file
    # exists to prevent rather than cause.
    #
    # Raised by CodeRabbit on ShadowSafin/AndroLLM#7.
    if pending is not None:
        raise Unrecognised(f"incomplete finding block: {pending.get('title', 'untitled')!r}")
    if len(findings) != expected:
        raise Unrecognised(f"footer reported {expected} finding(s), parsed {len(findings)}")

    return findings


def to_sarif(findings: list[dict], prefix: str, version: str) -> dict:
    rules: dict[str, dict] = {}
    results = []

    for finding in findings:
        rid = rule_id(finding["title"])
        rules.setdefault(
            rid,
            {
                "id": rid,
                "name": rid,
                "shortDescription": {"text": finding["title"]},
                "fullDescription": {"text": finding["title"]},
                "defaultConfiguration": {"level": LEVELS[finding["severity"]]},
                "properties": {
                    "tags": ["security", "threatcrush"],
                    "security-severity": SECURITY_SEVERITY[finding["severity"]],
                },
            },
        )

        # removeprefix, not lstrip. lstrip takes a *set* of characters, so
        # lstrip("./") eats every leading dot and slash: `.github/workflows/x.yml`
        # became `github/workflows/x.yml` and `.env` became `env`. Both then point
        # at a path that does not exist, and `.env` is exactly the sort of file a
        # credential scanner has findings in.
        uri = finding["file"].removeprefix("./")
        if prefix:
            uri = f"{prefix.strip('/')}/{uri}"

        results.append(
            {
                "ruleId": rid,
                "level": LEVELS[finding["severity"]],
                "message": {"text": finding.get("message", finding["title"])},
                "locations": [
                    {
                        "physicalLocation": {
                            "artifactLocation": {"uri": uri, "uriBaseId": "%SRCROOT%"},
                            # Clamped: SARIF rejects 0, and a whole-file finding
                            # has no line to report.
                            "region": {"startLine": max(1, finding["line"])},
                        }
                    }
                ],
                "partialFingerprints": {
                    "primaryLocationLineHash": f"{rid}:{uri}:{max(1, finding['line'])}"
                },
                "properties": {"severity": finding["severity"].lower()},
            }
        )

    return {
        "$schema": "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json",
        "version": "2.1.0",
        "runs": [
            {
                "tool": {
                    "driver": {
                        "name": "ThreatCrush",
                        "version": version,
                        "informationUri": "https://threatcrush.com",
                        "rules": list(rules.values()),
                    }
                },
                "results": results,
                "columnKind": "utf16CodeUnits",
            }
        ],
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--input", required=True, help="captured `threatcrush scan` output")
    parser.add_argument("--output", required=True, help="SARIF file to write")
    parser.add_argument("--path-prefix", default="", help="prepended to every file URI")
    parser.add_argument("--tool-version", default="unknown")
    parser.add_argument("--fail-on", default="", help="comma-separated severities that exit 1")
    args = parser.parse_args()

    with open(args.input, encoding="utf-8", errors="replace") as handle:
        text = handle.read()

    try:
        findings = parse(text)
    except Unrecognised as err:
        print(f"error: unrecognised ThreatCrush output ({err})", file=sys.stderr)
        print("--- first 40 lines ---", file=sys.stderr)
        for line in ANSI.sub("", text).splitlines()[:40]:
            print(line, file=sys.stderr)
        return 2

    with open(args.output, "w", encoding="utf-8") as handle:
        json.dump(to_sarif(findings, args.path_prefix, args.tool_version), handle, indent=2)
        handle.write("\n")

    print(f"converted {len(findings)} finding(s) to {args.output}")

    thresholds = [s.strip().lower() for s in args.fail_on.split(",") if s.strip()]
    if thresholds:
        unknown = [s for s in thresholds if s not in RANK]
        if unknown:
            # Silently ignoring a typo produces a gate that never fires, which
            # looks exactly like a passing build.
            print(f"error: unknown severity in --fail-on: {', '.join(unknown)}", file=sys.stderr)
            return 2
        floor = min(RANK[s] for s in thresholds)
        if any(RANK[f["severity"].lower()] >= floor for f in findings):
            print(f"::error::findings at or above {args.fail_on}")
            return 1

    return 0


if __name__ == "__main__":
    sys.exit(main())
