const gulp = require("gulp");
const gulpif = require("gulp-if");
const sass = require("gulp-sass");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const purgecss = require("gulp-purgecss");
const postcssPresetEnv = require("postcss-preset-env");
const globalPaths = require("../../package.json").paths;
const flags = require("../config/flags");
const purgeWhiteList = require("../../src/scss/whitelist.json");

gulp.task("stylesheets", function () {
  const postCssPlugins = [
    autoprefixer(),
    postcssPresetEnv({
      stage: 1, //https://preset-env.cssdb.org/features#stage-1
    }),
  ];

  if (flags.minified)
    postCssPlugins.push(
      cssnano({ preset: ["default", { discardComments: { removeAll: true } }] })
    );

  return gulp
    .src(globalPaths.css.source + globalPaths.css.filter)
    .pipe(gulpif(flags.maps, sourcemaps.init()))   
    .pipe(
      sass({ includePaths: ["node_modules", "scss"] }).on(
        "error",
        sass.logError
      )
    )
    .pipe(postcss(postCssPlugins))
    .pipe(
      gulpif(
        flags.purge,
        purgecss({
          content: [
            globalPaths.html.source + globalPaths.html.filter,
            globalPaths.javascripts.source + globalPaths.javascripts.filter,
          ],
          whitelist: purgeWhiteList,
        })
      )
    )

    .pipe(gulpif(flags.maps, sourcemaps.write("maps")))

    .pipe(gulp.dest(globalPaths.build + globalPaths.css.destination));
});
