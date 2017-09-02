var gulp      = require("gulp");
var uglify    = require('gulp-uglify');
var concatJS  = require('gulp-concat');
var concatCSS = require('gulp-concat-css');
var cleancss  = require('gulp-clean-css');
var hash      = require("gulp-hash");
var del       = require("del");

// Minify our JS files
gulp.task('js-compress', function () {
  del(['static/js/*.js'])
  gulp.src([
    'themes/kube/static/js/jquery-2.1.4.min.js',
    'themes/kube/static/js/tocbot.min.js',
    'themes/kube/static/js/kube.js'
  ])
  .pipe(concatJS('main.js'))
  .pipe(uglify())
  .pipe(hash())
  .pipe(gulp.dest('static/js/'))
  .pipe(hash.manifest('hash.json'))
  .pipe(gulp.dest('data/js'))
});

// Minify CSS
gulp.task('css-compress', function () {
  del(['static/css/*.css'])
  gulp.src([
    'themes/kube/static/css/font.css',
    'themes/kube/static/css/kube.css',
    'src/css/master.css'
  ])
  .pipe(concatCSS("main.css"))
  .pipe(cleancss())
  .pipe(hash())
  .pipe(gulp.dest('static/css/'))
  .pipe(hash.manifest('hash.json'))
  .pipe(gulp.dest('data/css/'))
});

gulp.task('default', ['js-compress', 'css-compress'])
