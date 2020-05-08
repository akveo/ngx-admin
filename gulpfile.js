'use strict';
/**
 * Load the TypeScript compiler and then load the tasks from 'scripts/gulp'.
 */
const path = require('path');
const gulpPath = path.join(__dirname, 'scripts/gulp');
const tsconfigPath = path.join(gulpPath, 'tsconfig.json');
const tsconfig = require(tsconfigPath);

// Register TypeScript.
require('ts-node').register({ project: tsconfigPath });
require(path.join(gulpPath, 'gulpfile'));
