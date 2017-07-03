var gulp = require('gulp')
var chai = require('chai')
var mocha = require('gulp-mocha')
var karma = require('karma');

gulp.task('default', ['karma'], function () {
  console.log('My Default Task')
})


gulp.task('karma',['mocha'], function (done) {
  karma.server.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});


gulp.task('mocha', function () {
  console.log('Run All Unit Test With Mocha')
  return gulp.src(['test/*.test.js'], { read: false })
    .pipe(mocha({
      reporter: 'mochawesome',
      reporterOptions: {
        reportDir: 'report',
        reportFilename: 'all',
        reportTitle: 'All Unit Test Report'
        // inlineAssets: true
      },
      globals: {
        should: require('chai')
      }
    }))
})

