const gulp = require("gulp");
const globalPaths = require("../../package.json").paths;

gulp.task("fonts", function () {
  return gulp
    .src(globalPaths.fonts.source + globalPaths.fonts.filter)
    .pipe(gulp.dest(globalPaths.build + globalPaths.fonts.destination));
});