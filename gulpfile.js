// Include gulp
var gulp = require('gulp');

// Include plugins
var browserSync = require('browser-sync');
var del = require('del');
var fileinclude = require('gulp-file-include');
var rename = require('gulp-rename');
var reload = browserSync.reload;
var notify = require('gulp-notify');
var runSequence = require('run-sequence');

// Default Task
gulp.task('default', function(cb) {
  runSequence('clean', ['fileinclude', 'images', 'browser-sync', 'watch'], cb);
});

// Tasks

// Clean 'dist'
gulp.task('clean', function() {
  return del(['dist/*.html', 'dist/img']);
});

// Include partial files into email template
gulp.task('fileinclude', function() {
  // grab 'template'
  gulp.src('templates/layouts/*.tpl.html')

  // include partials
  .pipe(fileinclude({
    basepath: 'templates/components/'
  }))

  // remove .tpl.html extension name
  .pipe(rename({
    extname: ""
  }))

  // add new extension name
  .pipe(rename({
    extname: ".html"
  }))

  // move file to folder
  .pipe(gulp.dest('dist/'))

  // notify to say the task has complete
  .pipe(notify({
    message: 'Template file includes complete'
  }))
});

// Compress images
gulp.task('images', function() {
  gulp.src('templates/img/*.{gif,jpg,png,svg}')

  // move images to the dist folder
  .pipe(gulp.dest('dist/img/'))

  // notify to say the task has complete
  .pipe(notify({
    message: 'Images task complete'
  }))
});

// Reload browser
gulp.task('reload', function () {
  browserSync.reload();
});

// Prepare Browser-sync
gulp.task('browser-sync', function() {
  browserSync.init(['templates/*/*.html'], {
  //proxy: 'your_dev_site.url'
    server: {
        baseDir: './dist/'
    }
  });
});

// Watch files for changes
gulp.task('watch', function() {
  gulp.watch(['templates/components/**/*.html', 'templates/components/**/*.css'], ['fileinclude', 'reload']);
  gulp.watch(['templates/layouts/*.tpl.html'], ['fileinclude']);
  gulp.watch(['*.html'], ['reload']);
  gulp.watch(['*.tpl.html'], ['reload']);
  gulp.watch('templates/img/*' , ['images']);
});
