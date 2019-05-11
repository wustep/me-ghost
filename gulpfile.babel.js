/*
Gulp file revised from ghost-theme-template and casper:
https://github.com/thoughtbot/ghost-theme-template/blob/master/gulpfile.babel.js
https://github.com/TryGhost/Casper/blob/master/gulpfile.js

- Use /assets/css/ and /assets/js/ folders
- Compiles and minifies app.scss to app.css
- Concatenates and minifies js files to app.js
*/

"use strict";

var gscan = require("gscan");

import _ from "lodash";
import autoprefix from "gulp-autoprefixer";
import chalk from "chalk";
import cleanCSS from "gulp-clean-css";
import concat from "gulp-concat";
import gulp from "gulp";
import jshint from "gulp-jshint";
import pkg from "./package.json";
import run from "run-sequence";
import sass from "gulp-sass";
import sasslint from "gulp-sass-lint";
import stylish from "jshint-stylish";
import uglify from "gulp-uglify-es";
import zip from "gulp-zip";

const paths = {
  scss: "./assets/css/**/*.scss",
  scssApp: "./assets/css/app.scss",
  js: "./assets/js/**/*.js",
  jsBuilt: "app.js",
  built: "./assets/built/"
};

const levels = {
  error: chalk.red,
  warning: chalk.yellow,
  recommendation: chalk.yellow,
  feature: chalk.green
};

gulp.task("sass", () =>
  gulp
    .src(paths.scssApp)
    .pipe(
      sass({
        sourcemaps: true
      }).on("error", sass.logError)
    )
    .pipe(autoprefix("last 2 versions"))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest(paths.built))
);

gulp.task("sasslint", () =>
  gulp
    .src(paths.scss)
    .pipe(
      sasslint({
        options: {
          formatter: "stylish"
        },
        configFile: ".sass-lint.yml"
      })
    )
    .pipe(sasslint.format())
);

gulp.task("js", () =>
  gulp
    .src(paths.js)
    .pipe(concat(paths.jsBuilt))
    .pipe(gulp.dest(paths.built))
    .pipe(uglify())
    .pipe(gulp.dest(paths.built))
);

gulp.task("jshint", () =>
  gulp
    .src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"))
);

gulp.task("scan", () => {
  function outputResult(result) {
    console.log("-", levels[result.level](result.level), result.rule);
  }

  function outputResults(theme) {
    theme = gscan.format(theme);

    console.log(chalk.bold.underline("\nRule Report:"));

    if (!_.isEmpty(theme.results.error)) {
      console.log(chalk.red.bold.underline("\n! Must fix:"));
      _.each(theme.results.error, outputResult);
    }

    if (!_.isEmpty(theme.results.warning)) {
      console.log(chalk.yellow.bold.underline("\n! Should fix:"));
      _.each(theme.results.warning, outputResult);
    }

    if (!_.isEmpty(theme.results.recommendation)) {
      console.log(chalk.red.yellow.underline("\n? Consider fixing:"));
      _.each(theme.results.recommendation, outputResult);
    }

    if (!_.isEmpty(theme.results.pass)) {
      console.log(
        chalk.green.bold.underline(
          "\n\u2713",
          theme.results.pass.length,
          "Passed Rules"
        )
      );
    }

    console.log("\n...checks complete.");
  }

  gscan
    .checkZip({
      path: `./${pkg.name}.zip`,
      name: pkg.name
    })
    .then(outputResults);
});

gulp.task("zip", () =>
  gulp
    .src(["./**/*", "!./node_modules/**", `!./${pkg.name}.zip`])
    .pipe(zip(`./${pkg.name}.zip`))
    .pipe(gulp.dest("."))
);

gulp.task(
  "default",
  gulp.series("sass", "sasslint", "js", "jshint"),
  () => gulp.watch(paths.scss, gulp.series("sass", "sasslint")),
  gulp.watch(paths.js, gulp.series("js", "jshint"))
);

gulp.task("deploy", callback => run("sass", "zip", "scan", callback));
