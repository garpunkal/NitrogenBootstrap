const path = require('path');
const flags = require("./gulpfile.js/config/flags");

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: flags.minified ? "production" : "development"  
};