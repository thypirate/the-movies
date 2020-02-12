var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var sass = require('gulp-sass');

function serve(){
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
   gulp.watch("sass/*.scss", gulp.series(sass));
   gulp.watch("*.html").on('change', reload)

}

gulp.task(serve);

function gulpSass(){
  return gulp.src("sass/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("css"))
      .pipe(browserSync.stream());
}

gulp.task(gulpSass);

gulp.task('default', gulp.series(serve, gulpSass));
