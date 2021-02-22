const util = require("gulp-util");

module.exports = {
  sourcemaps: !!util.env.sourcemaps,
  minified: !!util.env.minified,
  compress: !!util.env.compress,
  purge: !!util.env.purge
};