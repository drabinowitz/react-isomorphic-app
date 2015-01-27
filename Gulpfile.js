var gulp = require('gulp');

var watch = require('gulp-watch');

var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./client/css'));
});

gulp.task('sass-watch', ['sass'], function () {
  watch('./scss/*.scss', function () {
    gulp.start('sass');
  });
});
