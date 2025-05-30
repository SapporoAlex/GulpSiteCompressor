const { src, dest, series, parallel } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const terser = require("gulp-terser");
const del = require("del");

function clean() {
  return del(["output"]);
}

function minifyHTML() {
  return src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("output"));
}

function minifyCSS() {
  return src("src/*.css").pipe(cleanCSS()).pipe(dest("output"));
}

function minifyJS() {
  return src("src/*.js").pipe(terser()).pipe(dest("output"));
}

async function optimizeImages() {
  const imagemin = (await import("gulp-imagemin")).default;
  const mozjpeg = (await import("imagemin-mozjpeg")).default;
  const optipng = (await import("imagemin-optipng")).default;

  return src("src/img/**/*.{jpg,png}")
    .pipe(
      imagemin([
        mozjpeg({ quality: 75, progressive: true }),
        optipng({ optimizationLevel: 5 }),
      ])
    )
    .pipe(dest("output/img"));
}

exports.default = series(
  clean,
  parallel(minifyHTML, minifyCSS, minifyJS, optimizeImages)
);
