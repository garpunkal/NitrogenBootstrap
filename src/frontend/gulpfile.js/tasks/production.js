const gulp = require("gulp");

gulp.task("set-prod-node-env", function (done) {
  process.env.NODE_ENV = "production";
  done()
});

gulp.task("global-production-true", function (done) {
  global.production = true;
  PATHS.buildDest = PATHS.finalDest;
  done();
});