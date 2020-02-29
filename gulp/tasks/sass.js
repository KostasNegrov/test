module.exports = function () {
  $.gulp.task('sass', function () {
    return $.gulp.src('app/sass/main.sass')  /*изменять здесь*/
        .pipe($.gp.plumber())               /* при ошибке в коде в консоли выбъет ошибку*/
        .pipe($.gp.sourcemaps.init())       /* инициализируем сорсмепы */
        .pipe($.gp.sass())                  /* компиляция файлы sass в css */
        .pipe($.gp.autoprefixer({           /* расставляет автопрефиксы */
          overrideBrowserslist: ['last 2 versions']
        }))
        // .pipe($.gp.csso())                  /* производит минификацию кода */
        .pipe($.gp.rename('style.min.css')) /* переименовывет файл в style.min.css */
        .pipe($.gp.sourcemaps.write(''))    /* записывает сорс мепы в данный файл */
        .pipe($.gulp.dest('build/css'))     /* размещает файл в папку build/css */
        .pipe($.browserSync.stream());      /* перезапускает браузер */
  }); 
}; 