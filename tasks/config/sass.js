'use strict';

var pkg = require('../../package.json');

module.exports = {
  options: {
    includePaths: pkg.config.sassIncludePaths,
    imagePath: '<%= pkg.config.source %>/images'
  },
  all: {
    options: {
      sourceComments: 'none',
      sourceMap: true
    },
    files: [{
      expand: true,
      cwd: '<%= pkg.config.source %>/styles',
      src: './**/*.scss',
      ext: '.css',
      dest: '.tmp/styles'
    }]
  }
};