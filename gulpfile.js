var gulp = require('gulp');
var concat = require('gulp-concat');

 
gulp.task('scripts', function() {
  return gulp.src(['./node_modules/jquery/dist/jquery.js','./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js','./node_modules/jquery-smooth-scroll/src/jquery.smooth-scroll.js','./source/javascripts/owl.carousel.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./source/javascripts'));
});



var gulpCopy = require('gulp-copy');
gulp.task('copy', function() {
return gulp.src('./node_modules/bootstrap-sass/assets/fonts/bootstrap/**')
  .pipe(gulp.dest('./source/fonts'));
  });


var watch = require('gulp-watch');
gulp.task('watch', function () {
 gulp.watch('./javascripts/**/*.js');
 gulp.watch('./stylesheets/**/*.scss');
});
gulp.task('default',['scripts','copy',]);