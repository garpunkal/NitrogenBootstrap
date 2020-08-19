const gulp = require("gulp");
const clean = require("del").sync;

gulp.task("clean:build", function(done) {
  clean([PATHS.buildDest]);  
  done();
});

gulp.task("clean:production", function(done) {
  clean([PATHS.finalDest]);
  done();
});
