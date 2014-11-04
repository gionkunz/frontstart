'use strict';

module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: '.tmp/styles/',
      src: ['*.css', '!*.min.css'],
      dest: '<%= pkg.config.dest %>/styles/',
      ext: '.css'
    }]
  }
};