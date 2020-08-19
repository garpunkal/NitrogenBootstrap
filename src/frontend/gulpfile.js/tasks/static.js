const gulp = require("gulp");
const pathResolve = require("../lib/pathResolve");

gulp.task("static", function() {
  paths = {
    src: pathResolve(
      PATHS.BASE,
      PATHS.static.src,
      "**/*{ico,png,svg,webmanifest,xml,json}"
    ),
    dest: pathResolve(PATHS.buildDest, PATHS.static.dest)
  };

  return gulp.src(paths.src).pipe(gulp.dest(paths.dest));
});
