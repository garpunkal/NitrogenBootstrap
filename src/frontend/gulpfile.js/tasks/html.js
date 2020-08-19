const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const pathResolve = require("../lib/pathResolve");
const data = require("gulp-data");
const path = require("path");
const fs = require("fs");

gulp.task("html", function () {
  paths = {
    src: [pathResolve(PATHS.base, PATHS.html.source, "**/*.html"),
      "!" + pathResolve(PATHS.base, PATHS.html.source, "**/{components,layouts,shared,macros,data}/**")
    ],
    src_render: [pathResolve(PATHS.base, PATHS.html.source)],
    dest: pathResolve(PATHS.build, PATHS.site)
  };

  const dataFunction = function () {
    var dataPath = path.resolve(`${PATHS.base}/${PATHS.html.source}/data/_data.json`);
    return JSON.parse(fs.readFileSync(dataPath, "utf8"));
  };

  return gulp
    .src(paths.src)
    .pipe(data(dataFunction))
    .pipe(nunjucksRender({
      path: paths.src_render
    }))
    .pipe(gulp.dest(paths.dest));
});