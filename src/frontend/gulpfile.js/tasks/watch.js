const gulp = require("gulp");
const browserSync = require("browser-sync");

gulp.task('watch', function (cb) {

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