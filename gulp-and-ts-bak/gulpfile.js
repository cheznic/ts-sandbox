const { src, dest, parallel } = require('gulp');
// const { watch } = require('gulp');
const gts = require('gulp-typescript');
const tsProject = gts.createProject("tsconfig.json");
const htmlmin = require('gulp-htmlmin');
const uglifycss = require('gulp-uglifycss');
const del = require('del');

const paths = {
  stage: 'stage/**/*',
  js: {
    src: 'src/js/**/*.js',
    stage: 'stage/js/',
    build: 'build/js/'
  },
  html: {
    src: 'src/**/*.html',
    stage: 'stage/',
    build: 'build/html'
  },
  css: {
    src: 'src/style/**/*.css',
    stage: 'stage/css/',
    build: 'build/css/'
  },
  sass: {
    src: 'src/style/**/*.sass'
  }
};

function stageHtml() {
  return src(paths.html.src)
    .pipe(dest(paths.html.stage));
}

function stageCss() {
  return src(paths.css.src)
    .pipe(dest(paths.css.stage));
}

function stageJs() {
  return src(paths.js.src)
    .pipe(dest(paths.js.stage));
}

function stageTs() {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(dest(paths.js.stage));
}

function stageClean() {
  return del(paths.stage, {dryRun: true});
}

function buildTs() {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(dest(paths.js.build));
}

function buildHtml() {
  return src(paths.html.src)
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyJS: true
    }))
    .pipe(dest(paths.html.build));
}

function buildCss() {
  return src(paths.css.src)
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(dest(paths.css.build));
}

// var cssWatcher = watch(paths.style.src, css());
// cssWatcher.on('change', function (path) {
//   console.log(`file: ${path} was changed.`);
// });

// var htmlWatcher = watch(paths.html.src, html());
// htmlWatcher.on('change', function (path) {
//   console.log(`file: ${path} was changed.`);
// });

// var tsWatcher = watch(paths.scripts.src, ts());
// tsWatcher.on('change', function (path) {
//   console.log(`file: ${path} was changed.`);
// });

exports.build = parallel(buildHtml, buildCss, buildTs);
exports.stage = parallel(stageCss, stageHtml, stageTs, stageJs);
exports.default = parallel(buildHtml, buildCss, buildTs);
exports.clean = stageClean();
