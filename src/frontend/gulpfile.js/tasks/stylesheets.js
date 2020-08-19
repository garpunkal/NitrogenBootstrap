const gulp = require("gulp");
const gulpif = require("gulp-if");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const pathResolve = require("../lib/pathResolve");
const tailwindcss = require('tailwindcss');

gulp.task("stylesheets", function () {
  paths = {
    src: [
      pathResolve(PATHS.BASE, PATHS.stylesheets.src, "**/*.scss")
    ],
    dest: pathResolve(PATHS.buildDest, PATHS.stylesheets.dest)
  };

  return gulp
    .src(paths.src)
    .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(plumber())
    .pipe(
      sass({
        includePaths: ["node_modules", "scss"]
      }).on("error", sass.logError)
    )
    .pipe(
      postcss([
        tailwindcss(), 
        autoprefixer({
          overrideBrowserslist: [
            "last 2 version",
            "> 2%"
          ]
        })
      ])
    )
    .pipe(gulpif(production, sass({ outputStyle: "compressed"})))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.dest));
});