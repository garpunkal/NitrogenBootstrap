const gulp = require("gulp");
const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const globalPaths = require("../../package.json").paths;
const webpackConfig = require('../../webpack.config');

gulp.task("scripts", function () {
  return gulp
    .src([globalPaths.javascripts.source + globalPaths.javascripts.filter])
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest(globalPaths.build + globalPaths.javascripts.destination));
});