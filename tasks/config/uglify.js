'use strict';

module.exports = {
  all: {
    options: {
      sourceMap: true,
      sourceMapIncludeSources: true
    },
    files: [{
      expand: true,
      cwd: '.tmp/scripts/',
      src: ['**/*.js', '!test.js'],
      dest: '<%= pkg.config.dest %>/scripts/'
    }]
  }
};
