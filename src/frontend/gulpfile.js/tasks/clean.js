const gulp = require("gulp");
const clean = require("del").sync;
const globalPaths = require("../../package.json").paths;

gulp.task("clean", function(cb) {
  clean([globalPaths.build]);  
  cb();
});
