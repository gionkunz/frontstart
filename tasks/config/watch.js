'use strict';

var pkg = require('../../package.json');

module.exports = {
  html: {
    files: [
      '<%= pkg.config.source %>/**/*.{hbs,yml}',
      '!<%= pkg.config.source %>/bower_components/**/*'
    ],
    tasks: ['html:live']
  },

  scripts: {
    files: [
      '.tmp/scripts/**/*.js'
    ],
    tasks: ['scripts:live']
  },

  styles: {
    files: [
      '<%= pkg.config.source %>/**/*.scss',
      '!<%= pkg.config.source %>/bower_components/**/*'],
    tasks: ['styles:live']
  },

  livereload: {
    options: {
      livereload: true
    },
    files: ['.tmp/**/*.{html,css,js,png,gif,jpg}']
  }
};