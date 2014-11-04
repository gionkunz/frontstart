'use strict';

var pkg = require('../../package.json');

module.exports = {
  options: {
    browsers: pkg.config.browserSupport
  },
  tmp: {
    src: '.tmp/styles/**/*.css'
  }
};