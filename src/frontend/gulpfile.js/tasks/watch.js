const gulp = require("gulp");
const browserSync = require("browser-sync");

function browserReload(cb) {
  browserSync.reload();
  cb();
}

gulp.task('watch', function (cb) {
  gulp.watch("./src/html/**/*", gulp.series("html", browserReload));
  gulp.watch("./src/stylesheets/**/*", gulp.series("stylesheets", browserReload));
  gulp.watch("./src/javascripts/**/*", gulp.series("webpack", browserReload));   
  cb();
});