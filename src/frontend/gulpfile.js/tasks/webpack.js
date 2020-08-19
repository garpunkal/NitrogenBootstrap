const gulp = require("gulp");
const gulpif = require("gulp-if");
const path = require("path");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const pathResolve = require("../lib/pathResolve");

const webpackConfig = {
  context: path.resolve(PATHS.BASE, PATHS.javascripts.src),
  entry: {
    app: ["./app.js"]
  },
  mode: "development",
  output: {
    path: path.resolve(PATHS.BASE, PATHS.javascripts.src),
    filename: "app.js",
    publicPath: "/javascripts/"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(PATHS.BASE, PATHS.javascripts.src),
      path.resolve(PATHS.BASE, "node_modules")
    ]
  }
};

const webpackConfig_production = {
  context: path.resolve(PATHS.BASE, PATHS.javascripts.src),
  entry: {
    app: ["./app.js"]
  },
  mode: "production",
  output: {
    path: path.resolve(PATHS.BASE, PATHS.javascripts.src),
    filename: "app.js",
    publicPath: "/assets/javascripts/"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(PATHS.BASE, PATHS.javascripts.src),
      path.resolve(PATHS.BASE, "node_modules")
    ]
  }
};

gulp.task("webpack", function () {
  paths = {
    src: [pathResolve(PATHS.BASE, PATHS.javascripts.src, "**/*.js")],
    dest: pathResolve(PATHS.buildDest, PATHS.javascripts.dest)
  };

  return gulp
    .src(paths.src)
    .pipe(gulpif(!production, webpackStream(webpackConfig, webpack)))
    .pipe(gulpif(production, webpackStream(webpackConfig_production, webpack)))
    .pipe(gulp.dest(paths.dest));
});