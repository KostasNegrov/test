module.exports = function () {           /* отвечает за саму сборку, последовательно вызывая таски */
  $.gulp.task('build', $.gulp.series('clean', 'copy', 'sass', 'scripts', 'images', 'webp', 'svg'));
};