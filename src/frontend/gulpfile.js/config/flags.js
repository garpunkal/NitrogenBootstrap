const util = require("gulp-util");

module.exports = {
  sourcemaps: !!util.env.sourcemaps,
  minified: !!util.env.minified  
};