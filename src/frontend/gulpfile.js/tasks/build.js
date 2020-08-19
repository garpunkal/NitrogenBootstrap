const gulp = require("gulp");
const globalPaths = require("../../package.json").paths;

gulp.task("distBuildPath", function (cb) {
    globalPaths.build = globalPaths.dist;
    cb();
});