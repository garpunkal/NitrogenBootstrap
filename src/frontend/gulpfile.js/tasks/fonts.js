const gulp = require("gulp");
const pathResolve = require("../lib/pathResolve");

paths = {
  src: [pathResolve(PATHS.base, PATHS.fonts.source, "/**/*")],
  dest: pathResolve(PATHS.build, PATHS.fonts.source)
};

gulp.task("fonts", function () {
  return gulp
    .src(paths.src)
    .pipe(gulp.dest(paths.dest));
});