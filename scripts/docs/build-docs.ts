import { join } from 'path';
import { copy, mkdirp, remove, outputFile, writeJson, readJson } from 'fs-extra';

import { generateGithubSpaScript } from './ghspa-template';
import { runCommand } from './run-command';
import { log } from './log';

import { REPO_URL, OUT_DIR, REPO_OWNER, REPO_NAME } from './config';
const WORK_DIR = join(process.cwd(), '../_DOCS_BUILD_WORK_DIR_');
const MASTER_BRANCH_DIR = join(WORK_DIR, 'MASTER');
const DOCS_VERSIONS_PATH = join(MASTER_BRANCH_DIR, 'docs/versions.json');

export interface Version {
  checkoutTarget: string;
  name: string;
  path: string;
  isCurrent?: boolean;
}

(async function () {
  log(`Cleaning work dir "${WORK_DIR}"`);
  await remove(WORK_DIR);
  log(`Cleaning output dir "${OUT_DIR}"`);
  await remove(OUT_DIR);

  log(`Creating work dir "${WORK_DIR}"`);
  await mkdirp(WORK_DIR);

  log(`Cloning ${REPO_URL} into ${MASTER_BRANCH_DIR}`);
  await runCommand(`git clone ${REPO_URL} ${MASTER_BRANCH_DIR}`, { cwd: WORK_DIR });

  log('Reading versions configuration');
  const config: Version[] = await import(DOCS_VERSIONS_PATH);
  ensureSingleCurrentVersion(config);

  log(`Versions configuration:`);
  const jsonConfig = JSON.stringify(config, null, '  ');
  log(jsonConfig);

  log(`Building docs`);
  await buildDocs(config);

  log(`Adding versions.json to ${OUT_DIR}`);
  await outputFile(join(OUT_DIR, 'versions.json'), jsonConfig);

  log(`Deploying to ghpages`);
  await deploy(OUT_DIR);

  log(`Cleaning up working directory (${WORK_DIR})`);
  await remove(WORK_DIR);
}());

function ensureSingleCurrentVersion(versions: Version[]) {
  const currentVersion = versions.filter(v => v.isCurrent);
  if (currentVersion.length !== 1) {
    throw new Error(`Versions config error: Only one current version allowed.`)
  }
}

async function buildDocs(versions: Version[]) {
  const ghspaScript = generateGithubSpaScript(versions);

  return Promise.all(versions.map((version: Version) => {
    const versionDistDir = version.isCurrent
      ? OUT_DIR
      : join(OUT_DIR, version.name);

    return prepareVersion(version, versionDistDir, ghspaScript);
  }));
}

async function prepareVersion(version: Version, distDir: string, ghspaScript: string) {
  const projectDir = join(WORK_DIR, `${version.name}`);

  await copyToBuildDir(MASTER_BRANCH_DIR, projectDir);
  await checkoutVersion(version.checkoutTarget, projectDir);
  await runCommand('npm install', { cwd: projectDir });
  await addVersionNameToPackageJson(version.name, join(projectDir, 'package.json'));
  await buildDocsApp(projectDir, version.path);
  await copy(join(projectDir, 'docs/dist'), distDir);
  await outputFile(join(distDir, 'assets/ghspa.js'), ghspaScript);

  await remove(projectDir);
}

async function copyToBuildDir(from: string, to: string) {
  try {
    await mkdirp(to);
    await copy(from, to);
  } catch (e) {
    throw new Error(`Error copying from ${from} to ${to}: ${e.message}`);
  }
}

async function checkoutVersion(checkoutTarget: string, repoDirectory: string) {
  try {
    await runCommand(`git checkout ${checkoutTarget}`, { cwd: repoDirectory, showLog: false });
  } catch (e) {
    throw new Error(`Error checking out ${checkoutTarget}: ${e.message}`);
  }
}

async function addVersionNameToPackageJson(versionName: string, packageJsonPath: string) {
  const packageJsonObject = await readJson(packageJsonPath);
  packageJsonObject.versionName = versionName;
  await writeJson(packageJsonPath, packageJsonObject);
}

async function buildDocsApp(projectDir: string, baseHref: string) {
  if (!baseHref.endsWith('/')) {
    baseHref = baseHref + '/';
  }
  await runCommand('npm run docs:prepare', { cwd: projectDir });
  await runCommand(`npm run build -- docs --prod --base-href '${baseHref}'`, { cwd: projectDir });
  await runCommand('npm run docs:dirs', { cwd: projectDir });
}

async function deploy(distDir: string) {
  await runCommand(
    `npx angular-cli-ghpages --dir . --repo=https://GH_TOKEN@github.com/${REPO_OWNER}/${REPO_NAME}.git`,
    { cwd: distDir, showLog: true },
  );
}
