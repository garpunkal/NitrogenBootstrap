const gulp = require("gulp");
const browserSync = require("browser-sync");
const globalPaths = require("../../package.json").paths;

function browserReload(cb) {
  browserSync.reload();
  cb();
}

gulp.task('watch', function (cb) {
  gulp.watch(globalPaths.html.source + globalPaths.html.filter, gulp.series("html", browserReload));
  gulp.watch(globalPaths.css.source + globalPaths.css.filter, gulp.series("stylesheets", browserReload));
  gulp.watch(globalPaths.javascripts.source + globalPaths.javascripts.filter, gulp.series("scripts", browserReload));   
  cb();
});