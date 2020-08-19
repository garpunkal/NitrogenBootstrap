const path = require("path");

module.exports = function pathResolve(...paths) {
  return path.resolve(process.env.INIT_CWD, ...paths);
};
