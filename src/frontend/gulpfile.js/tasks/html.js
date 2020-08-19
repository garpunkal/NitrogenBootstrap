const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const pathResolve = require("../lib/pathResolve");
const data = require("gulp-data");
const path = require("path");
const fs = require("fs");

gulp.task("html", function () {
  html_paths = {
    src: [
      pathResolve(PATHS.BASE, PATHS.html.src, "**/*.html"),
      "!" +
      pathResolve(
        PATHS.BASE,
        PATHS.html.src,
        "**/{components,layouts,shared,macros,data}/**"
      )
    ],
    src_render: [pathResolve(PATHS.BASE, PATHS.html.src)],
    dest: pathResolve(PATHS.buildDest, PATHS.site)
  };

  const dataFunction = function () {
    var dataPath = path.resolve(
      `${PATHS.BASE}/${PATHS.html.src}/data/_data.json`
    );
    return JSON.parse(fs.readFileSync(dataPath, "utf8"));
  };

  return gulp
    .src(html_paths.src)
    .pipe(data(dataFunction))
    .pipe(
      nunjucksRender({
        path: html_paths.src_render
      })
    )
    .pipe(gulp.dest(html_paths.dest));    
});