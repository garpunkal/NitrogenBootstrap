const gulp = require("gulp");
const pathResolve = require("../lib/pathResolve");

paths = {
  src: [pathResolve(PATHS.BASE, PATHS.fonts.src, "/**/*")],
  dest: pathResolve(PATHS.buildDest, PATHS.fonts.dest)
};

gulp.task("fonts", function() {
  return gulp.src(paths.src).pipe(gulp.dest(paths.dest));
});
