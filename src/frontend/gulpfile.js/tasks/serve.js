const gulp = require("gulp");
const browserSync = require("browser-sync");
const globalPaths = require("../../package.json").paths;
const port = process.env.SERVER_PORT || 3000;

gulp.task('serve', function (cb) {
      
    browserSync.init({
        server: globalPaths.build,
        notify: false,
        port: port
    });

    cb();
});