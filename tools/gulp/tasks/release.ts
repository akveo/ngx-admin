import { spawn } from 'child_process';
import { existsSync, statSync } from 'fs';
import { task } from 'gulp';
import gulpRunSequence = require('run-sequence');
import path = require('path');

import { execTask, cleanTask } from '../util/task_helpers';
import { THEME_DIST_ROOT } from '../constants';

/** Removes redundant spec files from the release. TypeScript creates definition files for specs. */
// TODO(devversion): tsconfig files should share code and don't generate spec files for releases.
task(':build:release:clean-spec', cleanTask('dist/**/*+(-|.)spec.*'));

task('build:release', function (done: () => void) {
  // Synchronously run those tasks.
  gulpRunSequence(
    'clean',
    ':build:theme:release',
    ':build:release:clean-spec',
    done,
  );
});
