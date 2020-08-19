const gulp = require("gulp");
const nunjucks = require("gulp-nunjucks");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const gulpif = require("gulp-if");
const flags = require("../config/flags");
const globalPaths = require("../../package.json").paths;
const data = require("../../" + globalPaths.html.data);

gulp.task("html", function () {

  return gulp
    .src([
      globalPaths.html.source + globalPaths.html.filter,
      "!" + globalPaths.html.source + globalPaths.html.templatingFilter
    ])
    .pipe(nunjucks.compile(data))
    .pipe(
      rename(function (path) {
        path.extname = ".html";
      })
    )
    .pipe(gulpif(flags.minify, htmlmin({
      collapseWhitespace: true
    })))
    .pipe(gulp.dest(globalPaths.build));
});