const gulp = require("gulp");
const pathResolve = require("../lib/pathResolve");

gulp.task("app", function () {
  paths = {
    src: [
      pathResolve(PATHS.BASE, PATHS.app.src, "**/*")
    ],
    dest: pathResolve(PATHS.buildDest, PATHS.app.dest)
  };

  return gulp
    .src(paths.src)
    .pipe(gulp.dest(paths.dest));
});