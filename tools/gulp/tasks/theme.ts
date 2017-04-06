import { task, watch, src, dest } from 'gulp';
import { ScriptTarget, ModuleKind } from 'typescript';
import * as path from 'path';

import {
  THEME_DIST_ROOT,
  PROJECT_ROOT,
  THEME_DIR,
  HTML_MINIFIER_OPTIONS,
  THEME_LICENSE_BANNER,
} from '../constants';
import {
  sassBuildTask,
  tsBuildTask,
  execNodeTask,
  sequenceTask,
  triggerLivereload,
} from '../util/task_helpers';

// There are no type definitions available for these imports.
const inlineResources = require('../../../scripts/release/inline-resources');
const gulpRollup = require('gulp-better-rollup');
const gulpMinifyHtml = require('gulp-htmlmin');
const gulpIf = require('gulp-if');

/** Path to tsconfig file for the theme. */
const tsconfigPath = path.join(THEME_DIR, 'tsconfig.json');

/** Asset files to be added to the components output. */
const assetFiles = [
  path.join(THEME_DIR, '**/*.html'),
  path.join(THEME_DIR, '**/*.scss'),
  path.join(THEME_DIR, 'package.json'),
  path.join(THEME_DIR, 'README.md'),
  path.join(THEME_DIR, 'LICENSE.txt'),
];

/** Builds components to UMD bundle. */
task('build:theme', [':build:theme:bundle:umd']);

/** Builds components for @nga/theme releases */
task(':build:theme:release', sequenceTask(
  ':build:theme:bundle:umd',
  ':build:theme:bundle:esm',
  ':build:theme:ngc',
));

/** Builds components typescript in ES5, ES6 target. For specs Karma needs CJS output. */
task(':build:theme:ts:es5', tsBuildTask(tsconfigPath, { target: ScriptTarget.ES5 }));
task(':build:theme:ts:es6', tsBuildTask(tsconfigPath, { target: ScriptTarget.ES2015 }));
task(':build:theme:ts:spec', tsBuildTask(tsconfigPath, {
  target: ScriptTarget.ES5, module: ModuleKind.CommonJS,
}));

/** Tasks to create a UMD or ES bundle */
task(':build:theme:bundle:umd', sequenceTask(
  ':build:theme:ts:es5', ':build:theme:inline', ':build:theme:rollup:umd',
));

task(':build:theme:bundle:esm', sequenceTask(
  ':build:theme:ts:es6', ':build:theme:inline', ':build:theme:rollup:esm',
));

/** Copies all component assets to the build output. */
task(':build:theme:assets', () => {
  return src(assetFiles)
    .pipe(gulpIf(/.html$/, gulpMinifyHtml(HTML_MINIFIER_OPTIONS)))
    .pipe(dest(THEME_DIST_ROOT));
});

/** Compiles the components SCSS into minified CSS. */
task(':build:theme:scss', sassBuildTask(THEME_DIST_ROOT, THEME_DIR, true));

/** Builds a ES6 bundle for all components. */
task(':build:theme:rollup:esm', () => {
  return src(path.join(THEME_DIST_ROOT, 'index.js'))
    .pipe(createRollupBundle('es', 'theme.js'))
    .pipe(dest(path.join(THEME_DIST_ROOT, 'bundles')));
});

/** Builds a UMD bundle (ES5) for all components. */
task(':build:theme:rollup:umd', () => {
  return src(path.join(THEME_DIST_ROOT, 'index.js'))
    .pipe(createRollupBundle('umd', 'theme.umd.js'))
    .pipe(dest(path.join(THEME_DIST_ROOT, 'bundles')));
});


/** Builds components with resources (html, css) inlined into the built JS. */
task(':build:theme:inline', sequenceTask(
  [':build:theme:scss', ':build:theme:assets'],
  ':inline-resources',
));

/** Inlines resources (html, css) into the JS output. */
task(':inline-resources', () => inlineResources(THEME_DIST_ROOT));

/** Generates metadata.json files for all of the components. */
task(':build:theme:ngc', ['build:theme'], execNodeTask(
  '@angular/compiler-cli', 'ngc', ['-p', tsconfigPath],
));

/** [Watch task] Rebuilds (ESM output) whenever ts, scss, or html sources change. */
task(':watch:theme', () => {
  watch(path.join(THEME_DIR, '**/*.ts'), ['build:theme', triggerLivereload]);
  watch(path.join(THEME_DIR, '**/*.scss'), ['build:theme', triggerLivereload]);
  watch(path.join(THEME_DIR, '**/*.html'), ['build:theme', triggerLivereload]);
});

const ROLLUP_GLOBALS = {
  // Angular dependencies
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/forms': 'ng.forms',
  '@angular/router': 'ng.router',
  '@angular/http': 'ng.http',
  '@angular/animations': 'ng.animations',
  '@angular/animations/browser': 'ng.animations.browser',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/platform-browser/animations': 'ng.platformBrowser.animations',
  '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',

  // Rxjs dependencies
  'rxjs/Subject': 'Rx',
  'rxjs/add/observable/fromEvent': 'Rx.Observable',
  'rxjs/add/observable/forkJoin': 'Rx.Observable',
  'rxjs/add/observable/of': 'Rx.Observable',
  'rxjs/add/observable/merge': 'Rx.Observable',
  'rxjs/add/observable/throw': 'Rx.Observable',
  'rxjs/add/operator/auditTime': 'Rx.Observable.prototype',
  'rxjs/add/operator/toPromise': 'Rx.Observable.prototype',
  'rxjs/add/operator/map': 'Rx.Observable.prototype',
  'rxjs/add/operator/filter': 'Rx.Observable.prototype',
  'rxjs/add/operator/do': 'Rx.Observable.prototype',
  'rxjs/add/operator/share': 'Rx.Observable.prototype',
  'rxjs/add/operator/finally': 'Rx.Observable.prototype',
  'rxjs/add/operator/catch': 'Rx.Observable.prototype',
  'rxjs/add/operator/first': 'Rx.Observable.prototype',
  'rxjs/add/operator/startWith': 'Rx.Observable.prototype',
  'rxjs/add/operator/switchMap': 'Rx.Observable.prototype',
  'rxjs/Observable': 'Rx',

  // 3rd party dependencies
  'immutable': 'immutable',
};

/** Creates a rollup bundles of the @nga/theme components.*/
function createRollupBundle(format: string, outFile: string) {
  const rollupOptions = {
    context: 'this',
    external: Object.keys(ROLLUP_GLOBALS),
  };

  const rollupGenerateOptions = {
    // Keep the moduleId empty because we don't want to force developers to a specific moduleId.
    moduleId: '',
    moduleName: 'nga.theme',
    banner: THEME_LICENSE_BANNER,
    format: format,
    dest: outFile,
    globals: ROLLUP_GLOBALS,
  };

  return gulpRollup(rollupOptions, rollupGenerateOptions);
}
