const gulp = require("gulp");
const browserSync = require("browser-sync");
const port = process.env.SERVER_PORT || 3000;
   
gulp.task('serve', function (cb) {
      
    browserSync.init({
        server: PATHS.build,
        notify: false,
        port: port,
        //open:false,
        startPath: '/site/index.html'
    });
    cb();
});