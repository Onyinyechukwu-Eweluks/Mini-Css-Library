const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

// function to compile sass style to css
function stylesSetUp() {
  return src("naAfro/**/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("css"));
}

// function to watch sass file for changes and recompile it
function watchStyles() {
  watch(["naAfro/**/*.scss", "*.html"], stylesSetUp);
}

// run the file
exports.default = series(stylesSetUp, watchStyles);
