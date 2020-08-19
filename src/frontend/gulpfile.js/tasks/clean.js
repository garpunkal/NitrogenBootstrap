const gulp = require("gulp");
const clean = require("del").sync;
const paths = require("../../package.json").paths;

gulp.task("clean:build", function(cb) {
  clean([paths.build]);  
  cb();
});

gulp.task("clean:production", function(cb) {
  clean([paths.dist]);
  cb();
});
