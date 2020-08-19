const gulp = require("gulp");

const path = require("path");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const globalPaths = require("../../package.json").paths;
const flags = require("../config/flags");

const webpackConfig = {
  context: path.resolve(globalPaths.javascripts.source),
  entry: {
    app: ["./app.js"]
  },
  mode: flags.minify ? "production" : "development",
  devtool: flags.maps ? "inline-source-map" : "none",
  output: {
    path: path.resolve(globalPaths.javascripts.source),
    filename: "app.js",
    publicPath: "/assets/javascripts/"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(globalPaths.javascripts.source),
      path.resolve(globalPaths.base, "node_modules")
    ]
  }
};

gulp.task("webpack", function () {
  return gulp
    .src(globalPaths.javascripts.source + globalPaths.javascripts.filter)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(globalPaths.build + globalPaths.javascripts.destination));
});