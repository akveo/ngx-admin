var gulp = require('gulp');
var sass = require('gulp-sass');
var replace = require('gulp-replace');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');

var inlineResources = require('./scripts/inline-resources');

gulp.task('start', copySources);

function copySources() {
  gulp.src('./src/framework/**/*')
    .pipe(gulp.dest('./build'))
    .on('end', fixStyleUrl);
}

function fixStyleUrl() {
  gulp.src(['./build/**/*.ts'])
    .pipe(replace('.scss', '.css'))
    .pipe(gulp.dest('./build'))
    .on('end', autoprefixSass);
}

function autoprefixSass() {
  gulp.src(['./build/**/*.component.scss', './build/**/*.component.theme.scss'])
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./build'))
    .on('end', compileSass);
}

function compileSass() {
  gulp.src('./build/**/*.component.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./build'));
}

gulp.task('default', ['start']);
