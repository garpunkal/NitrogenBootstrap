const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const globalPaths = require("../../package.json").paths;
const gulpif = require("gulp-if");
const flags = require("../config/flags");

gulp.task("images", function () {
  return gulp
    .src(globalPaths.images.source + globalPaths.images.filter)
    .pipe(gulpif(flags.minify, imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 65, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest(globalPaths.build + globalPaths.images.destination)));
});