module.exports = function () {           /* запускает сервер и устанавливает слежение при изменении файлов */
  $.gulp.task('serve', function () {
    $.browserSync.init({             /* запускает сервер */
      server: 'build/',              /*Браузер синк запускается из этой папки */
      browser: 'Firefox',             // закоментить если нужен хром
      browser: 'Chrome',             // закоментить если нужен хром
      notify: false,                   //Отключает комментарии
      // tunnel: true,
      // tunnel: "solaris", //Demonstration page: http://projectmane.localtunnel.me
    });
                 /* слежение за файлами */
    $.gulp.watch('app/sass/**/*.sass', $.gulp.series('sass'));
    $.gulp.watch('app/*.html', $.gulp.series('html'));
    $.gulp.watch('app/js/**/*.js', $.gulp.series('scripts'));
    $.gulp.watch('app/images/**/*.{png,jpg,svg}', $.gulp.series('allimg'));
  });
};