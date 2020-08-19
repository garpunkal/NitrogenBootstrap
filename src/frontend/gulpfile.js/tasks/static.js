const gulp = require("gulp");
const pathResolve = require("../lib/pathResolve");

gulp.task("static", function () {
  paths = {
    src: pathResolve(PATHS.base, PATHS.static.source, "**/*{ico,png,svg,webmanifest,xml,json}" ),
    dest: pathResolve(PATHS.build, PATHS.static.destination)
  };

  return gulp
    .src(paths.src)
    .pipe(gulp.dest(paths.dest));
});