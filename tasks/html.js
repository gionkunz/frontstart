'use strict';

module.exports = function(grunt) {
  grunt.registerTask('html', 'Currently only runs all assemble targets', function(target) {
    grunt.task.run([
      'assemble'
    ]);
  });
};