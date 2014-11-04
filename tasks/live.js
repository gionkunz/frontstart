'use strict';

module.exports = function(grunt) {
  grunt.registerTask('live', 'Runs html, scripts, styles, connect and watch for live coding', function(target) {
    grunt.task.run([
      'clean:live',
      'karma:live',
      'browserify:live',
      'html:live',
      'styles:live',
      'scripts:live',
      'imagemin',
      'configureRewriteRules',
      'connect:live',
      'watch'
    ]);
  });
};
