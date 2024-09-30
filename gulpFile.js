const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// function to compile sass style to css
function stylesSetUp() {
  return src("naAfro/**/*.scss").pipe(sass()).pipe(dest("css"));
}

// function to watch sass file for changes and recompile it
function watchStyles() {
  watch(["naAfro/**/*.scss"], stylesSetUp);
}

// run the file
exports.default = series(stylesSetUp, watchStyles);
