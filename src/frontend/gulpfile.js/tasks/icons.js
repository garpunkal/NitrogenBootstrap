const gulp = require("gulp");
const svgstore = require("gulp-svgstore");
const pathResolve = require("../lib/pathResolve");

gulp.task("icons", function() {
  paths = {
    src: [pathResolve(PATHS.base, PATHS.icons.source, "*.svg")],
    dest: pathResolve(PATHS.build, PATHS.icons.destination)
  };

  return gulp
    .src(paths.src)
    .pipe(svgstore())
    .pipe(gulp.dest(paths.dest));
});
