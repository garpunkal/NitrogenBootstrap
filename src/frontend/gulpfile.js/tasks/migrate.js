const gulp = require("gulp");
const clean = require("del").sync;
const pathResolve = require("../lib/pathResolve");

gulp.task("migrate", function (cb) {
  paths = {
    src: [
      pathResolve(PATHS.base, PATHS.dist, "**/*.css"),
      pathResolve(PATHS.base, PATHS.dist, "**/*.js"),
      pathResolve(PATHS.base, PATHS.dist, "**/*{jpg,png,svg}")
    ],
    dest: pathResolve(PATHS.migrate)
  };

  clean([pathResolve(PATHS.migrate)], {
    force: true
  });
 
  return gulp
    .src(paths.src)
    .pipe(gulp.dest(paths.dest));
});