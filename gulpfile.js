global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),  /* Этот плагин дает возможность подключать плагины которые начинаются gulp- */
  browserSync: require('browser-sync').create(),  /* Подключаем браузер синк */
  del: require('del'),   /*  */
  imageminJpegRecompress: require('imagemin-jpeg-recompress'),
  pngquant: require('imagemin-pngquant'),
  path: {
    config: require('./gulp/config'), /* подключаем файл config.js */    
    jquery: './app/libs/jquery/jquery-1.12.0.min.js', /* подключаем библиотеку */     
    slidePro: './app/libs/slider-pro/jquery.sliderPro.js', /* подключаем библиотеку */
    // wow: './app/libs/wow/wow.js', /* подключаем библиотеку */
        
    js: './app/js/**/*.js',               /* подключаем файл js */
  }
};

$.path.config.forEach(function (path) {   /* подключаем каждый таск */
  require(path)();
});