module.exports = function () {            /* копирует все html файлы в папку build */
  $.gulp.task('html', function () {
    return $.gulp.src('app/*.html')
        .pipe($.gulp.dest('build'))
        .on('end', $.browserSync.reload);
  });
};