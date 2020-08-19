const gulp = require("gulp");
const svgstore = require("gulp-svgstore");
const pathResolve = require("../lib/pathResolve");

gulp.task("icons", function() {
  paths = {
    src: [pathResolve(PATHS.BASE, PATHS.icons.src, "*.svg")],
    dest: pathResolve(PATHS.buildDest, PATHS.icons.dest)
  };

  return gulp
    .src(paths.src)
    .pipe(svgstore())
    .pipe(gulp.dest(paths.dest));
});
