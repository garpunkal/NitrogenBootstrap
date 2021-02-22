const gulp = require("gulp");
const globalPaths = require("../../package.json").paths;

gulp.task("mode", function (cb) {
    globalPaths.build = globalPaths.dist;
    cb();
});