var gulp = require('gulp');
var clean = require('gulp-clean');
var react = require('gulp-react');
var mainBowerFiles = require('main-bower-files');

gulp.task('default', ['vendor','js','jsx','css','html']);

gulp.task('js', function() {
  gulp.src('src/js/**/*.js')
      .pipe(gulp.dest('build/js/'));
});

gulp.task('jsx', function() {
  gulp.src('src/js/**/*.jsx')
      .pipe(react())
      .pipe(gulp.dest('build/js'));
});

gulp.task('css', function() {
  gulp.src('src/css/**/*.css')
      .pipe(gulp.dest('build/css/'));
});

gulp.task('html', function() {
  gulp.src('src/**/*.html')
      .pipe(gulp.dest('build/'));
});

gulp.task('vendor', function() {
  gulp.src(mainBowerFiles())
      .pipe(gulp.dest('build/vendor/'));
});

gulp.task('clean', function() {
  gulp.src('build')
      .pipe(clean({force: true}));
});
