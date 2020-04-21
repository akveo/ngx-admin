import { exec } from 'child_process';
import { promisify } from 'util';

export interface RunCommandOptions {
  cwd?: string;
  showLog?: boolean;
}

const DEFAULT_OPTIONS: RunCommandOptions = { cwd: process.cwd(), showLog: false };

export async function runCommand(command: string, options?: RunCommandOptions) {
  let { cwd, showLog } = Object.assign({}, DEFAULT_OPTIONS, options);

  try {
    console.log(`Running "${command}" in "${cwd}"`);
    const { stdout, stderr } = await promisify(exec)(command, { cwd });

    if (showLog && stdout) {
      console.log(stdout);
    }

    if (stderr) {
      console.log(`stderr from "${command}" in "${cwd}"`);
      console.warn(stderr);
    }
  } catch ({ message, stdout, stderr }) {
    let errorMessage = `Error running "${command}" in "${cwd}": ${message}.`;
    if (stdout) {
      errorMessage += `\nstdout: ${stdout}`;
      console.error(stdout);
    }
    if (stderr) {
      errorMessage += `\nstderr: ${stderr}`;
    }
    throw new Error(errorMessage);
  }
}
