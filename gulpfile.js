const gulp = require("gulp");
const sass = require("gulp-sass");

function style() {
  return (
        gulp
            .src("./public/scss/**/style.scss")
            .pipe(sass({includePaths: './node_modules/'}))
            .pipe(sass())
            // What is the destination for the compiled file?
            .pipe(gulp.dest("./public/css"))
            // .pipe(browserSync.stream())
    );
}

function watch() {
    gulp.watch("./public/scss/**/*.scss", style)
}

exports.style = style;
exports.default = watch;
