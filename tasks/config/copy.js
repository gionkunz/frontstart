'use strict';

module.exports = {
  // Copy raw files from source to dest and assemble output HTML and images from .tmp to dest
  dist: {
    files: [
      {
        // Static files from source directory
        expand: true,
        dot: true,
        cwd: '<%= pkg.config.source %>',
        dest: '<%= pkg.config.dest %>',
        src: [
          '*.{ico,png,txt}',
          '.htaccess',
          '*.html',
          'fonts/*'
        ]
      },
      {
        // Generated images from .tmp
        expand: true,
        cwd: '.tmp',
        dest: '<%= pkg.config.dest %>',
        src: [
          '**/*.{png,jpg,gif}'
        ]
      },
      {
        // Generated pages from Assemble
        expand: true,
        cwd: '.tmp/pages',
        dest: '<%= pkg.config.siteDest %>',
        src: [
          '**/*.html'
        ]
      }
    ]
  }
};