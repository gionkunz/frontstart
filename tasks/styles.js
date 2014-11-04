'use strict';

module.exports = function(grunt) {
  grunt.registerTask('styles', 'Sass, auto-prefixer, critical and optional minification', function(target) {
    grunt.task.run([
      'sass',
      target === 'dist' ? 'csslint:dist' : 'csslint:live',
      'autoprefixer',
      'critical',
      target === 'dist' ? 'cssmin' : 'noop'
    ]);
  });
};
