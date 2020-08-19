const gulp = require("gulp");
const requireDir = require('require-dir'); // load tasks
global.PATHS = require("./path-config");

requireDir("./tasks", {
    recurse: true
});

gulp.task('default',
    gulp.series([
        "global-production-false",
        "set-dev-node-env",
        "clean:build",
        "html",
        "stylesheets",
        "images",
        "webpack",
        "icons",
        "fonts",
        "static",
        "app", 
        "serve",        
        "watch"     
    ]));

gulp.task('production',
    gulp.series([
        "global-production-true",
        "set-prod-node-env",
        "clean:production",
        "html",
        "stylesheets",
        "images",
        "webpack",
        "icons",
        "fonts",
        "static",
        "migrate"      
    ]));