/*eslint strict: ["error", "global"]*/
'use strict';

// Tasks for compiling Bootstrap Sass, and copying assets
// to the dist directory.

//=======================================================
// Include gulp
//=======================================================
var gulp = require('gulp');

//=======================================================
// Include Our Plugins
//=======================================================
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var sync        = require('browser-sync');
var rename      = require('gulp-rename');

// Export our tasks.
module.exports = {

  // Compile Bootstrap Sass.
  sass: function() {
    return gulp.src('./src/bootstrap/**/*.scss')
      .pipe(sass({ outputStyle: 'nested' })
        .on('error', sass.logError))
      .pipe(prefix({
        browsers: [
          'last 2 versions',
          'IE >= 10'
        ],
        cascade: false
      }))
      .pipe(rename(function (path) {
        path.dirname = '';
        return path;
      }))
      .pipe(gulp.dest('./dist/bootstrap'))
      .pipe(sync.stream({match: '**/*.css'}));
  },

  // Copies individual Bootstrap JavaScript files to dist/bootstrap.
  moveJs: function() {
    return gulp.src([
      './src/bootstrap/javascripts/bootstrap/*.js'
    ], { base: './' })
      .pipe(rename(function (path) {
        path.dirname = '';
        return path;
      }))
      .pipe(gulp.dest('./dist/bootstrap/js'));
  },

  // Copies Boostrap font files to dist/fonts/bootstrap.
  moveFonts: function() {
    return gulp.src([
      './src/bootstrap/fonts/bootstrap/*'
    ], { base: './' })
      .pipe(rename(function (path) {
        path.dirname = '';
        return path;
      }))
      .pipe(gulp.dest('./dist/fonts/bootstrap'));
  }
};
