const gulp = require("gulp");

gulp.task("set-dev-node-env", function (done) {
  process.env.NODE_ENV = "development";
  done();
});

gulp.task("global-production-false", function (done) {
  global.production = false;
  done();
});