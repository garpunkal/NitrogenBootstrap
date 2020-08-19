const gulp = require("gulp");
const requireDir = require('require-dir');

requireDir("./tasks", {
    recurse: true
});

gulp.task('default',
    gulp.series([
        "clean:build",
        gulp.parallel(
            "html",
            "stylesheets",
            "images",
            "webpack",
            "fonts"
        ),
        "serve",
        "watch"
    ]));

gulp.task('build',
    gulp.series([
        "distBuildPath",
        "clean:production",
        gulp.parallel(
            "html",
            "stylesheets",
            "images",
            "webpack",
            "fonts"
        ),
        "migrate"
    ]));