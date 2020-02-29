module.exports = function () {         /* удаляет папку build  при запуске */
  $.gulp.task('clean', function () {
    return $.del('build');
  });
};