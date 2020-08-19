const gulp = require("gulp");
const pathResolve = require("../lib/pathResolve");

gulp.task("images", function () {
  paths = {
    src: [pathResolve(PATHS.base, PATHS.images.source, "**/*{jpg,png,svg}")],
    dest: pathResolve(PATHS.build, PATHS.images.destination)
  };

  return gulp
    .src(paths.src)
    .pipe(gulp.dest(paths.dest));
});