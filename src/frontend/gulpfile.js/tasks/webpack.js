const gulp = require("gulp");
const gulpif = require("gulp-if");
const path = require("path");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const pathResolve = require("../lib/pathResolve");

const webpackConfig_default = {
  context: path.resolve(PATHS.base, PATHS.javascripts.source),
  entry: {
    app: ["./app.js"]
  },
  mode: "development",
  output: {
    path: path.resolve(PATHS.base, PATHS.javascripts.source),
    filename: "app.js",
    publicPath: "/javascripts/"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(PATHS.base, PATHS.javascripts.source),
      path.resolve(PATHS.base, "node_modules")
    ]
  }
};

const webpackConfig_production = {
  context: path.resolve(PATHS.base, PATHS.javascripts.source),
  entry: {
    app: ["./app.js"]
  },
  mode: "production",
  output: {
    path: path.resolve(PATHS.base, PATHS.javascripts.source),
    filename: "app.js",
    publicPath: "/assets/javascripts/"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(PATHS.base, PATHS.javascripts.source),
      path.resolve(PATHS.base, "node_modules")
    ]
  }
};

gulp.task("webpack", function () {
  paths = {
    src: [pathResolve(PATHS.base, PATHS.javascripts.source, "**/*.js")],
    dest: pathResolve(PATHS.build, PATHS.javascripts.destination)
  };

  return gulp
    .src(paths.src)
    .pipe(gulpif(!production, webpackStream(webpackConfig_default, webpack)))
    .pipe(gulpif(production, webpackStream(webpackConfig_production, webpack)))
    .pipe(gulp.dest(paths.dest));
});