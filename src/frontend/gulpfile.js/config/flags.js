const util = require("gulp-util");

module.exports = {
  maps: !!util.env.maps,
  minify: !!util.env.minify  
};