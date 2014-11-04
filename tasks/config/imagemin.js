'use strict';

module.exports = {
  dist: {
    options: {
      optimizationLevel: 3,
      progressive: true
    },
    files: [
      {
        expand: true,
        cwd: '<%= pkg.config.source %>/images',
        src: ['**/*.{png,jpg,gif}'],
        dest: '.tmp/images'
      }
    ]
  }
};