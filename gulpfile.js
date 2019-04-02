const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require('browser-sync').create();

function style() {

  return (
        gulp
            .src("./public/scss/**/style.scss")
            .pipe(sass())
            // What is the destination for the compiled file?
            .pipe(gulp.dest("./public/css"))
            // .pipe(browserSync.stream())
    );
}

function watch() {
    // browserSync.init({
    //     server: {
    //         baseDir: './'
    //     }
    // })
    gulp.watch("./public/scss/**/*.scss", style)
}

exports.style = style;
exports.default = watch;
