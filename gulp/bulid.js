const gulp = require('gulp');
const gulp_sequence = require('gulp-sequence');

gulp.task('build', (callback) => {
  return gulp_sequence(
    'reset',[
      'bin',
      'public',
      'routes',
      'views',
      'app'
    ],
    'server',
    'watch',
    callback
  )
});
