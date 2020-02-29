module.exports = function () {               /* копирует все изображения в папку build */
  $.gulp.task('allimg', function () {
    return $.gulp.src('app/images/**/*.{jpg,png,svg}')
        .pipe($.gulp.dest('build/images'));
  });
};