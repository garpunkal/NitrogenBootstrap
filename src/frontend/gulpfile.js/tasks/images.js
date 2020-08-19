const gulp = require("gulp");
const pathResolve = require("../lib/pathResolve");

gulp.task("images", function() {
  paths = {
    src: [
      pathResolve(PATHS.BASE, PATHS.images.src, "**/*{jpg,png,svg}")
    ],
    dest: pathResolve(PATHS.buildDest, PATHS.images.dest)
  };

  return gulp.src(paths.src).pipe(gulp.dest(paths.dest));
});
