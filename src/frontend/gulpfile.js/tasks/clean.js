const gulp = require("gulp");
const clean = require("del").sync;

gulp.task("clean:build", function(cb) {
  clean([PATHS.build]);  
  cb();
});

gulp.task("clean:production", function(cb) {
  clean([PATHS.dist]);
  cb();
});
