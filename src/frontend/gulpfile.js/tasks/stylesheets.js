const gulp = require("gulp");
const gulpif = require("gulp-if");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const pathResolve = require("../lib/pathResolve");
const postCssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');

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
        postCssImport(),
        tailwindcss(),
        postcssPresetEnv({
          browsers: "last 2 versions",
          stage: 1 //https://preset-env.cssdb.org/features#stage-1
        })
      ])
    )
    .pipe(gulpif(production, sass({
      outputStyle: "compressed"
    })))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.dest));
});