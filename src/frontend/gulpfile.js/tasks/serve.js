const gulp = require("gulp");
const browserSync = require("browser-sync");
const port = process.env.SERVER_PORT || 3000;
   
gulp.task('serve', function (cb) {
      
    browserSync.init({
        //injectChanges: true,
        server: PATHS.build,
        notify: false,
        port: port,
    });
    cb();
});