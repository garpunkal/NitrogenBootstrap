const gulp = require("gulp");
const gulpif = require("gulp-if");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const postCssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');
const globalPaths = require("../../package.json").paths;
const flags = require("../config/flags");

gulp.task("stylesheets", function () {

  return gulp
    .src(globalPaths.css.source + globalPaths.css.filter)
    
    .pipe(gulpif(flags.maps, sourcemaps.init()))
   
    .pipe(plumber())
   
    .pipe(sass({
       includePaths: ["node_modules", "scss"]
      }).on("error", sass.logError))

    .pipe(postcss([postCssImport(), tailwindcss(), postcssPresetEnv({
      stage: 1 //https://preset-env.cssdb.org/features#stage-1
    })]))
  
    .pipe(gulpif(flags.minify, sass({
      outputStyle: "compressed"
    })))
    
    .pipe(gulpif(flags.maps, sourcemaps.write("maps")))
  
    .pipe(gulp.dest(globalPaths.build + globalPaths.css.destination));
});