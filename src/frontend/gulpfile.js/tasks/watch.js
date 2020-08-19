const gulp = require("gulp");
const browserSync = require("browser-sync");
const pathResolve = require("../lib/pathResolve");

gulp.task('watch', function (cb) {

  paths = {
    htmlSrc: pathResolve(PATHS.BASE, PATHS.html.src, "/**/*"),
    stylesheetsSrc: pathResolve(PATHS.BASE, PATHS.stylesheets.src, "/**/*.scss"),
    javascriptsSrc: pathResolve(PATHS.BASE, PATHS.javascripts.src, "/**/*.js")
  };

  gulp.watch("./src/html/**/*",
    function (done) {
      gulp.task("html")();
      browserSync.reload();
      done();
    });

  gulp.watch("./src/stylesheets/**/*",
    function (done) {
      gulp.task("stylesheets")();
      browserSync.reload();
      done();
    });

  gulp.watch("./src/javascripts/**/*",
    function (done) {
      gulp.task("webpack")();
      browserSync.reload();
      done();
    });

  cb();
});