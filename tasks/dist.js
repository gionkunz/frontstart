'use strict';

module.exports = function(grunt) {
  grunt.registerTask('dist', 'Creates dist with html, scripts, styles and copies static resources and .tmp', function(target) {
    grunt.task.run([
      'clean:dist',
      'html:dist',
      'styles:dist',
      'scripts:dist',
      'imagemin',
      'copy:dist',
      target === 'preview' ? 'connect:dist' : 'noop'
    ]);
  });
};
