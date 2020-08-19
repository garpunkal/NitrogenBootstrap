const gulp = require("gulp");
const clean = require("del").sync;
const globalPaths = require("../../package.json").paths;

gulp.task("migrate", function () {
  
  clean([globalPaths.migrate], {
    force: true
  });

  return gulp
    .src([
      globalPaths.dist + "**/*{scss,css}",
      globalPaths.dist + "**/*{ts,tsx,js,jsx,json}",
      globalPaths.dist + "**/*{ttf,otf,woff,woff2,eot,svg}",
      globalPaths.dist + "**/*{png,jpg,jpeg,gif,svg}"
    ])
    .pipe(gulp.dest(globalPaths.migrate));
});