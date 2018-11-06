const gulp = require("gulp");
const sass = require("gulp-sass");
const clean = require("gulp-clean");
const hash = require("gulp-hash");
const nodeSass = require("node-sass");
const pug = require("gulp-pug");
const cleanCSS = require("gulp-clean-css");

const team = require("./src/content/team");

const isProduction = process.env.NODE_ENV === "production";

const srcDir = "./src";
const distDir = "./dist/srijan/2018";

const paths = {
  sass: {
    src: `${srcDir}/sass/**/*.sass`,
    dest: `${distDir}/assets/css`
  },
  pug: {
    src: [`${srcDir}/content/**/*.pug`, `!${srcDir}/content/**/_*.pug`],
    dest: `${distDir}`
  },
  assetManifest: `${srcDir}/assets.json`
};

const assetBasePath = isProduction ? "/srijan/2018/assets" : "/assets";

const options = {
  sass: {
    outputStyle: "compressed",
    functions: {
      "mapImg($img)": function _mapImg(img) {
        const p = `${assetBasePath}${img.getValue()}`;
        return new nodeSass.types.String(p);
      }
    }
  },
  hash: {
    hash: {
      hashLength: 7
    },
    css: {
      deleteOld: true,
      sourceDir: paths.sass.dest
    }
  },
  pug: {
    locals: {
      stylesheet: () => {
        const assetManifest = require(paths.assetManifest);
        const fileName = isProduction
          ? assetManifest["style.css"]
          : "style.css";
        return `${assetBasePath}/css/${fileName}`;
      },
      team
    }
  }
};

const cleanDist = () =>
  gulp
    .src(distDir, {
      read: false
    })
    .pipe(clean());

const styles = () => {
  if (isProduction) {
    return gulp
      .src(paths.sass.src)
      .pipe(sass(options.sass).on("error", sass.logError))
      .pipe(hash(options.hash.hash))
      .pipe(cleanCSS())
      .pipe(gulp.dest(paths.sass.dest))
      .pipe(hash.manifest(paths.assetManifest, options.hash.css))
      .pipe(gulp.dest("."));
  }
  return gulp
    .src(paths.sass.src)
    .pipe(sass(options.sass).on("error", sass.logError))
    .pipe(gulp.dest(paths.sass.dest));
};

const content = () => {
  return gulp
    .src(paths.pug.src)
    .pipe(pug(options.pug))
    .pipe(gulp.dest(paths.pug.dest));
};

const build = gulp.series(styles, content);

const watch = () => {
  gulp.watch(paths.sass.src, styles);
  gulp.watch(paths.pug.src[0], content);
};

module.exports = {
  default: build,
  clean: cleanDist,
  build,
  styles,
  content,
  watch: gulp.series(build, watch)
};
