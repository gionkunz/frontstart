'use strict';

module.exports = function(grunt) {
  grunt.registerTask('scripts', 'JSHint, browserify and optional uglify', function(target) {
    if(target === 'live') {
      return grunt.task.run([
        'jshint:console',
        'karma:live:run'
      ]);
    } else {
      return grunt.task.run([
        'jshint:checkstyle',
        'jshint:console',
        'browserify:testOnlyWithCoverage',
        'browserify:dist',
        'uglify',
        'karma:dist'
      ]);
    }
  });
};
