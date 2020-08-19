const gulp = require("gulp");
const clean = require("del").sync;
const pathResolve = require("../lib/pathResolve");

gulp.task("migrate", function(cb) {
  paths = {
    src: [
      pathResolve(PATHS.BASE, PATHS.finalDest, "**/*.css"),
      pathResolve(PATHS.BASE, PATHS.finalDest, "**/*.js"),
      pathResolve(PATHS.BASE, PATHS.finalDest, "**/*{jpg,png,svg}")
    ],
    dest: pathResolve(PATHS.migrateDest)
  };

  clean([pathResolve(PATHS.migrateDest)], { force: true });
  return gulp.src(paths.src).pipe(gulp.dest(paths.dest));
});
