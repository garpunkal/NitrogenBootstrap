const gulp = require("gulp");
const clean = require("del").sync;
const globalPaths = require("../../package.json").paths;

gulp.task("migrate", function () {
  
  clean([globalPaths.migrate], {
    force: true
  });

  return gulp
    .src([
      globalPaths.dist + "**/*.css",
      globalPaths.dist + "**/*.js",
      globalPaths.dist + "**/*{ttf,woff,woff2}",
      globalPaths.dist + "**/*{jpg,png,svg}"
    ])
    .pipe(gulp.dest(globalPaths.migrate));
});