var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var notifier = require('node-notifier');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var notify = function(error) {
  var message = 'In: ';
  var title = 'Error: ';

  if(error.description) {
    title += error.description;
  } else if (error.message) {
    title += error.message;
  }

  if(error.filename) {
    var file = error.filename.split('/');
    message += file[file.length-1];
  }

  if(error.lineNumber) {
    message += '\nOn Line: ' + error.lineNumber;
  }

  gutil.log(title + " " + message);
  notifier.notify({title: title, message: message, wait: true});
};

var bundler = browserify({
    entries: ['./app/js/app.jsx'],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
})
.transform('babelify', { 
    presets: ['es2015', 'react'], 
    plugins: ["syntax-class-properties", "transform-class-properties"]
});


function bundle() {
  return bundler
    .bundle()
    .on('error', notify)
    .pipe(source('main.js'))
    .pipe(gulp.dest('./app/static/'))
}
bundler.on('update', bundle)

gulp.task('build', function() {
  bundle()
});

/*
gulp.task('serve', function(done) {
  gulp.src('')
    .pipe(server({
      livereload: {
        basePath: './app/static/',
        enable: true,
        filter: function(filePath, cb) {
          if(/main.js/.test(filePath)) {
            cb(true)
          } else if(/style.css/.test(filePath)){
            cb(true)
          }
        }
      },
      open: true
    }));
});
*/


gulp.task('sass', function () {
  gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./app/static/'));
});

gulp.task('default', ['build', 'sass', 'watch']);

gulp.task('watch', function () {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
  gulp.watch('./app/js/**/*.jsx', ['build']);
});
