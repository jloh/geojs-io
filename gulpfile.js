'use strict';

var gulp        = require('gulp');
var uglifyjs    = require('terser');
var gutil       = require('gulp-util');
var sass        = require('gulp-sass');
var hash        = require('gulp-hash');
var concat      = require('gulp-concat');
var cleanCSS    = require('gulp-clean-css');
var sassUnicode = require('gulp-sass-unicode');
var composer    = require('gulp-uglify/composer');

var del         = require('del');
var fs          = require('fs');

// Use a custom uglifyjs instance that supports ES6
var uglify = composer(uglifyjs, console);

var paths = {
  styles: {
    src: 'src/sass/main.scss',
    dest: 'static/css/',
    watch: 'src/sass/**/*.scss',
    hash: 'data/css.json'
  },
  scripts: {
    src: 'src/js/*.js',
    dest: 'static/js/',
    hash: 'data/js.json'
  }
};

gulp.task('sass', function () {
  del([paths.styles.dest + "*.css"])
  return gulp.src('./src/sass/main.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sassUnicode())
    .pipe(hash())
    .pipe(gulp.dest(paths.styles.dest))
    // Create hash map
    .pipe(hash.manifest(paths.styles.hash))
    // Put the map into the data directory for hugo to find
    .pipe(gulp.dest("./"))
});

// Minify our JS files
gulp.task('scripts', function () {
  del([paths.scripts.dest + "*.js"]);
  return gulp.src(paths.scripts.src)
  .pipe(uglify())
  .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
  .pipe(hash())
  .pipe(gulp.dest(paths.scripts.dest))
  .pipe(hash.manifest(paths.scripts.hash))
  .pipe(gulp.dest('.'));
})

gulp.task('watch', ['sass', 'scripts'], function () {
  gulp.watch(paths.styles.watch, ['sass']);
  gulp.watch(paths.scripts.src, ['scripts']);
});

gulp.task('default', ['sass', 'scripts'])
