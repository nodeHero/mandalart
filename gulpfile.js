const appname = "mandalart";

var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  less = require('gulp-less'),
  runsync = require('run-sequence');

var pkg = require('./package.json'),
  fpath = {
    'jssrc': './app/js',
    'jsdist': './public/js',
    'lesssrc': './app/less',
    'lessdist': './public/css'
  };

gulp.task('clean', function(cb) {
  var del = require('del');

  return del([
    fpath.jsdist +'/*.js', // public/js/*.js
    fpath.lessdist +'/*.css', // public/css/*.js
  ], cb);
});

gulp.task('jsmerge', function() {
  var builder = require('gulp-module-builder'),
    header = require('gulp-header'),
    footer = require('gulp-footer'),
    trailer = require('./gulp/trailer'),
    dateformat = require('dateformat'),
    now = new Date(),
    headerOpt = {
      pkg: pkg,
      date: {
        now: dateformat(now, 'yyyy-mm-dd HH:MM:ss'),
        year: dateformat(now, 'yyyy'),
      }
    };

  return gulp.src(fpath.jssrc +'/modules.js.json')
    .pipe(builder())
    .pipe(header(trailer.header, headerOpt))
    .pipe(footer(trailer.footer))
    .pipe(gulp.dest(fpath.jsdist));
});

gulp.task('lessmerge', function() {
  var builder = require('gulp-module-builder'),
    header = require('gulp-header'),
    footer = require('gulp-footer'),
    trailer = require('./gulp/trailer'),
    dateformat = require('dateformat'),
    now = new Date(),
    headerOpt = {
      pkg: pkg,
      date: {
        now: dateformat(now, 'yyyy-mm-dd HH:MM:ss'),
        year: dateformat(now, 'yyyy'),
      }
    };

  return gulp.src(fpath.lesssrc +'/modules.less.json')
    .pipe(builder({ext:'less'}))
    .pipe(header(trailer.header, headerOpt))
    .pipe(footer(trailer.footer))
    .pipe(gulp.dest(fpath.lessdist));
});

gulp.task('less', function () {
  var del = require('del');

  gulp.src('./public/css/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());

  del(fpath.lessdist + '/*.less');
});

gulp.task('watch', function () {
  gulp.watch('./app/less/**/*.less', function() {
    runsync('lessmerge', 'less').pipe(livereload());
  });
  gulp.watch('./app/js/**/*.js', function() {
    runsync('jsmerge').pipe(livereload());
  });
});

gulp.task('livereload', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'ejs',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('uglify', function() {
  var uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

  return gulp.src(fpath.jsdist +'/*.js')
    .pipe(uglify({
      preserveComments: 'some',
      output: {
        beautify: false,
        source_map: null
      },
      compress: { warnings: false },
      mangle: {}
    }))
    .pipe(gulp.dest(fpath.jsdist));
});

gulp.task('default', function(done) {
  runsync('clean', 'lessmerge', 'less', 'jsmerge', 'uglify', done);
});

gulp.task('local', function(done) {
  runsync('clean', 'lessmerge', 'less', 'jsmerge', 'livereload', 'watch', done);
});
