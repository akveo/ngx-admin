const gulp = require('gulp');
const sass = require('gulp-sass');
const replace = require('gulp-replace');
const rollup = require('gulp-rollup');
const rename = require('gulp-rename');
const resolve = require('rollup-plugin-node-resolve');

const inline_recources = require('./scripts/inline-resources');

const BUILD_DIR = './.ng_build';
const LIB_DIR = './lib';
const ROLLUP_GLOBALS = {

  // Angular dependencies
  '@angular/animations': 'ng.animations',
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/forms': 'ng.forms',
  '@angular/http': 'ng.http',
  '@angular/platform-browser': 'ng.platformBrowser',
  '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
  '@angular/platform-browser/animations': 'ng.platformBrowser.animations',
  '@angular/platform-server': 'ng.platformServer',
  '@angular/router': 'ng.router',

  // RxJS dependencies
  'rxjs/AnonymousSubject': 'Rx',
  'rxjs/AsyncSubject': 'Rx',
  'rxjs/BehaviorSubject': 'Rx',
  'rxjs/Notifiction': 'Rx',
  'rxjs/ObservableInput': 'Rx',
  'rxjs/Observable': 'Rx',
  'rxjs/Observer': 'Rx',
  'rxjs/ReplaySubject': 'Rx',
  'rxjs/Scheduler': 'Rx',
  'rxjs/Subject': 'Rx',
  'rxjs/SubjectSubscriber': 'Rx',
  'rxjs/SubscribableOrPromise': 'Rx',
  'rxjs/Subscriber': 'Rx',
  'rxjs/Subscription': 'Rx',
  'rxjs/TeardownLogic': 'Rx',
  'rxjs/add/observable/fromPromise': 'Rx.Observable',
  'rxjs/add/observable/of': 'Rx.Observable',
  'rxjs/add/observable/bindCallback': 'Rx.Observable',
  'rxjs/add/observable/bindNodeCallback': 'Rx.Observable',
  'rxjs/add/observable/combineLatest': 'Rx.Observable',
  'rxjs/add/observable/concat': 'Rx.Observable',
  'rxjs/add/observable/create': 'Rx.Observable',
  'rxjs/add/observable/defer': 'Rx.Observable',
  'rxjs/add/observable/empty': 'Rx.Observable',
  'rxjs/add/observable/forkJoin': 'Rx.Observable',
  'rxjs/add/observable/from': 'Rx.Observable',
  'rxjs/add/observable/fromEvent': 'Rx.Observable',
  'rxjs/add/observable/fromEventPattern': 'Rx.Observable',
  'rxjs/add/observable/interval': 'Rx.Observable',
  'rxjs/add/observable/merge': 'Rx.Observable',
  'rxjs/add/observable/never': 'Rx.Observable',
  'rxjs/add/observable/range': 'Rx.Observable',
  'rxjs/add/observable/throw': 'Rx.Observable',
  'rxjs/add/observable/timer': 'Rx.Observable',
  'rxjs/add/observable/webSocket': 'Rx.Observable',
  'rxjs/add/observable/zip': 'Rx.Observable',
  'rxjs/add/operator/audit': 'Rx.Observable.prototype',
  'rxjs/add/operator/auditTime': 'Rx.Observable.prototype',
  'rxjs/add/operator/buffer': 'Rx.Observable.prototype',
  'rxjs/add/operator/bufferCount': 'Rx.Observable.prototype',
  'rxjs/add/operator/bufferTime': 'Rx.Observable.prototype',
  'rxjs/add/operator/bufferToggle': 'Rx.Observable.prototype',
  'rxjs/add/operator/bufferWhen': 'Rx.Observable.prototype',
  'rxjs/add/operator/catch': 'Rx.Observable.prototype',
  'rxjs/add/operator/combineAll': 'Rx.Observable.prototype',
  'rxjs/add/operator/combineLatest': 'Rx.Observable.prototype',
  'rxjs/add/operator/concat': 'Rx.Observable.prototype',
  'rxjs/add/operator/concatAll': 'Rx.Observable.prototype',
  'rxjs/add/operator/concatMap': 'Rx.Observable.prototype',
  'rxjs/add/operator/concatMapTo': 'Rx.Observable.prototype',
  'rxjs/add/operator/count': 'Rx.Observable.prototype',
  'rxjs/add/operator/debounce': 'Rx.Observable.prototype',
  'rxjs/add/operator/debounceTime': 'Rx.Observable.prototype',
  'rxjs/add/operator/defaultIfEmpty': 'Rx.Observable.prototype',
  'rxjs/add/operator/delay': 'Rx.Observable.prototype',
  'rxjs/add/operator/delayWhen': 'Rx.Observable.prototype',
  'rxjs/add/operator/dematerialize': 'Rx.Observable.prototype',
  'rxjs/add/operator/distinct': 'Rx.Observable.prototype',
  'rxjs/add/operator/distinctUntilChanged': 'Rx.Observable.prototype',
  'rxjs/add/operator/distinctUntilKeyChanged': 'Rx.Observable.prototype',
  'rxjs/add/operator/do': 'Rx.Observable.prototype',
  'rxjs/add/operator/elementAt': 'Rx.Observable.prototype',
  'rxjs/add/operator/every': 'Rx.Observable.prototype',
  'rxjs/add/operator/exhaust': 'Rx.Observable.prototype',
  'rxjs/add/operator/exhaustMap': 'Rx.Observable.prototype',
  'rxjs/add/operator/expand': 'Rx.Observable.prototype',
  'rxjs/add/operator/filter': 'Rx.Observable.prototype',
  'rxjs/add/operator/find': 'Rx.Observable.prototype',
  'rxjs/add/operator/findIndex': 'Rx.Observable.prototype',
  'rxjs/add/operator/first': 'Rx.Observable.prototype',
  'rxjs/add/operator/forEach': 'Rx.Observable.prototype',
  'rxjs/add/operator/finally': 'Rx.Observable.prototype',
  'rxjs/add/operator/groupBy': 'Rx.Observable.prototype',
  'rxjs/add/operator/ignoreElements': 'Rx.Observable.prototype',
  'rxjs/add/operator/isEmpty': 'Rx.Observable.prototype',
  'rxjs/add/operator/last': 'Rx.Observable.prototype',
  'rxjs/add/operator/letProto': 'Rx.Observable.prototype',
  'rxjs/add/operator/lift': 'Rx.Observable.prototype',
  'rxjs/add/operator/map': 'Rx.Observable.prototype',
  'rxjs/add/operator/materialize': 'Rx.Observable.prototype',
  'rxjs/add/operator/max': 'Rx.Observable.prototype',
  'rxjs/add/operator/merge': 'Rx.Observable.prototype',
  'rxjs/add/operator/mergeAll': 'Rx.Observable.prototype',
  'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
  'rxjs/add/operator/mergeMapTo': 'Rx.Observable.prototype',
  'rxjs/add/operator/mergeScan': 'Rx.Observable.prototype',
  'rxjs/add/operator/min': 'Rx.Observable.prototype',
  'rxjs/add/operator/multicast': 'Rx.Observable.prototype',
  'rxjs/add/operator/observeOn': 'Rx.Observable.prototype',
  'rxjs/add/operator/pairwise': 'Rx.Observable.prototype',
  'rxjs/add/operator/partition': 'Rx.Observable.prototype',
  'rxjs/add/operator/pluck': 'Rx.Observable.prototype',
  'rxjs/add/operator/publish': 'Rx.Observable.prototype',
  'rxjs/add/operator/publishBehavior': 'Rx.Observable.prototype',
  'rxjs/add/operator/publishLast': 'Rx.Observable.prototype',
  'rxjs/add/operator/publishReplay': 'Rx.Observable.prototype',
  'rxjs/add/operator/race': 'Rx.Observable.prototype',
  'rxjs/add/operator/reduce': 'Rx.Observable.prototype',
  'rxjs/add/operator/repeat': 'Rx.Observable.prototype',
  'rxjs/add/operator/repeatWhen': 'Rx.Observable.prototype',
  'rxjs/add/operator/retry': 'Rx.Observable.prototype',
  'rxjs/add/operator/retryWhen': 'Rx.Observable.prototype',
  'rxjs/add/operator/sample': 'Rx.Observable.prototype',
  'rxjs/add/operator/sampleTime': 'Rx.Observable.prototype',
  'rxjs/add/operator/scan': 'Rx.Observable.prototype',
  'rxjs/add/operator/sequenceEqual': 'Rx.Observable.prototype',
  'rxjs/add/operator/share': 'Rx.Observable.prototype',
  'rxjs/add/operator/single': 'Rx.Observable.prototype',
  'rxjs/add/operator/skip': 'Rx.Observable.prototype',
  'rxjs/add/operator/skipUntil': 'Rx.Observable.prototype',
  'rxjs/add/operator/skipWhile': 'Rx.Observable.prototype',
  'rxjs/add/operator/startWith': 'Rx.Observable.prototype',
  'rxjs/add/operator/subscribeOn': 'Rx.Observable.prototype',
  'rxjs/add/operator/switch': 'Rx.Observable.prototype',
  'rxjs/add/operator/switchMap': 'Rx.Observable.prototype',
  'rxjs/add/operator/switchMapTo': 'Rx.Observable.prototype',
  'rxjs/add/operator/take': 'Rx.Observable.prototype',
  'rxjs/add/operator/takeLast': 'Rx.Observable.prototype',
  'rxjs/add/operator/takeUntil': 'Rx.Observable.prototype',
  'rxjs/add/operator/takeWhile': 'Rx.Observable.prototype',
  'rxjs/add/operator/throttle': 'Rx.Observable.prototype',
  'rxjs/add/operator/throttleTime': 'Rx.Observable.prototype',
  'rxjs/add/operator/timeInterval': 'Rx.Observable.prototype',
  'rxjs/add/operator/timeout': 'Rx.Observable.prototype',
  'rxjs/add/operator/timeoutWith': 'Rx.Observable.prototype',
  'rxjs/add/operator/timestamp': 'Rx.Observable.prototype',
  'rxjs/add/operator/toArray': 'Rx.Observable.prototype',
  'rxjs/add/operator/toPromise': 'Rx.Observable.prototype',
  'rxjs/add/operator/window': 'Rx.Observable.prototype',
  'rxjs/add/operator/windowCount': 'Rx.Observable.prototype',
  'rxjs/add/operator/windowToggle': 'Rx.Observable.prototype',
  'rxjs/add/operator/windowWhen': 'Rx.Observable.prototype',
  'rxjs/add/operator/withLatestFrom': 'Rx.Observable.prototype',
  'rxjs/add/operator/zipAll': 'Rx.Observable.prototype',
  'rxjs/add/operator/zipProto': 'Rx.Observable.prototype',

  // 3rd party dependencies
  'immutable': 'immutable',
  '@ng-bootstrap/ng-bootstrap': 'ng-bootstrap.ng-bootstrap',

  // @nga dependencies
  '@akveo/nga-theme': 'nga.theme',
  '@akveo/nga-auth': 'nga.auth',
};
const ROLLUP_COMMON_CONFIG = {
  sourceMap: true,
  rollup: require('rollup'),
  context: 'this',
  globals: ROLLUP_GLOBALS,
  external: Object.keys(ROLLUP_GLOBALS),
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
  ],
};

gulp.task('copy-sources', copySources);
gulp.task('default', ['copy-sources']);
gulp.task('inline-resources', copyResources);
gulp.task('bundle:umd:theme', bundleUmdTheme);
gulp.task('bundle:umd:auth', bundleUmdAuth);
gulp.task('bundle:es2015:theme', bundleES2015Theme);
gulp.task('bundle:es2015:auth', bundleES2015Auth);
gulp.task('bundle', ['bundle:umd:theme', 'bundle:umd:auth', 'bundle:es2015:theme', 'bundle:es2015:auth']);

function copySources() {
  gulp.src('./src/framework/**/*')
    .pipe(gulp.dest(BUILD_DIR))
    .on('end', replaceScssWithCss);
}

function replaceScssWithCss() {
  gulp.src(`${BUILD_DIR}/**/*.ts`)
    .pipe(replace('.scss', '.css'))
    .pipe(gulp.dest(BUILD_DIR))
    .on('end', compileSass);
}

function compileSass() {
  gulp.src(`${BUILD_DIR}/**/*.scss`)
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(BUILD_DIR));
}

function copyResources() {
  gulp.src([
      `${BUILD_DIR}/**/*.html`,
      `${BUILD_DIR}/**/*.css`,
      `${BUILD_DIR}/**/*.scss`,
      `${BUILD_DIR}/**/LICENSE.txt`,
      `${BUILD_DIR}/**/README.md`,
      `${BUILD_DIR}/**/package.json`,
    ])
    .pipe(gulp.dest(LIB_DIR))
    .on('end', inlineResources);
}

function inlineResources() {
  inline_recources(LIB_DIR);
}

function bundleUmdTheme() {
  const config = {
    src: `${LIB_DIR}/theme/**/*.js`,
    moduleName: 'nga.theme',
    entry: `${LIB_DIR}/theme/index.js`,
    format: 'umd',
    output: 'theme.umd.js',
    dest: `${LIB_DIR}/theme/bundles`,
  };

  bundle(config);
}

function bundleUmdAuth() {
  const config = {
    src: `${LIB_DIR}/auth/**/*.js`,
    moduleName: 'nga.auth',
    entry: `${LIB_DIR}/auth/index.js`,
    format: 'umd',
    output: 'auth.umd.js',
    dest: `${LIB_DIR}/auth/bundles`,
  };

  bundle(config);
}

function bundleES2015Theme() {
  const config = {
    src: `${LIB_DIR}/theme/**/*.js`,
    moduleName: 'nga.theme',
    entry: `${LIB_DIR}/theme/index.js`,
    format: 'es',
    output: 'theme.es2015.js',
    dest: `${LIB_DIR}/theme/bundles`,
  };

  bundle(config);
}

function bundleES2015Auth() {
  const config = {
    src: `${LIB_DIR}/auth/**/*.js`,
    moduleName: 'nga.auth',
    entry: `${LIB_DIR}/auth/index.js`,
    format: 'es',
    output: 'auth.es2015.js',
    dest: `${LIB_DIR}/auth/bundles`,
  };

  bundle(config);
}

function bundle(config) {
  gulp.src(config.src)
    .pipe(rollup(Object.assign({}, ROLLUP_COMMON_CONFIG, {
      moduleName: config.moduleName,
      entry: config.entry,
      format: config.format,
    })))
    .pipe(rename(config.output))
    .pipe(gulp.dest(config.dest));
}
