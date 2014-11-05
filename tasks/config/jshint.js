'use strict';

var stylish = require('jshint-stylish');
var allFiles = [
  'Gruntfile.js',
  '<%= pkg.config.source %>/**/*.js',
  '!<%= pkg.config.source %>/bower_components/**/*',
  '!<%= pkg.config.source %>/scripts/vendor/**/*'
];

module.exports = {
  options: {
    jshintrc: '.jshintrc'
  },
  console: {
    options: {
      reporter: stylish
    },
    files: {
      src: allFiles
    }
  },
  checkstyle: {
    options: {
      force: true,
      reporter: 'checkstyle',
      reporterOutput: '<%= pkg.config.reportDest %>/jshint-report.xml'
    },
    files: {
      src: allFiles
    }
  }
};
