var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
  console.log('Hooray - you created a gulp task!');
});

gulp.task('html', function(){
  console.log('Imagine something awesome happening to your html here.');
});

gulp.task('styles', function(){
  gulp.src('./app/assets/styles/styles.css');
});

gulp.task('watch', function(){

  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });

});
