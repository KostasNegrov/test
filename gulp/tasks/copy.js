module.exports = function () {        /* этот таск копирует все файлы в папку build */
  $.gulp.task('copy', function () {
    return $.gulp.src([
        'app/libs/**/*',    /* библиотеки */
        'app/fonts/**/*.{eot,ttf,woff,woff2}',    /* шрифты */
        'app/images/**',                  /* изображения */
        'app/*.html'                      /* html */
    ], {
      base: 'app'                       /* указываем откуда это все берется */
    })
        .pipe($.gulp.dest('build'));  /*  перемещает в папку build*/
  });
};