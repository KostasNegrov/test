const jsFiles = [     /* Массив с путями к файлам */
  // $.path.jquery,  
  // $.path.slidePro,
  // $.path.wow,
  $.path.js,
];

module.exports = function () {
  $.gulp.task('scripts', function () {
    return $.gulp.src(jsFiles)                                /* принимаемые файлы из мачива выше*/
        .pipe($.gp.plumber())                                 /* проаеряем на ошибки */
        .pipe($.gp.sourcemaps.init())                         /* подключаем сорс мепы */
        .pipe($.gp.babel({presets: ['@babel/preset-env']}))   /* этот плагин переписывает ES6 синтаксис в ES5 */
        .pipe($.gp.concat('all.js'))                          /* конкатинация скриптов в один файл */
        .pipe($.gp.uglify())                                  /* минифицирует код */
        .pipe($.gp.rename('all.min.js'))                      /* переименовывает файл */
        .pipe($.gp.sourcemaps.write(''))                      /* записывает сорс мепы в данный файл */
        .pipe($.gulp.dest('build/js'))                        /* размещает файл в папку build/js */
        .pipe($.browserSync.stream());                        /* перезапускает браузер */
  });
};