'use strict';

var files = [
  '.tmp/styles/**/*.css',
  '!.tmp/styles/**/*critical.css'
];

module.exports = {
  options: {
    csslintrc: '.csslintrc'
  },
  live: {
    src: files
  },
  dist: {
    options: {
      formatters: [
        {id: 'compact'},
        {id: 'csslint-xml', dest: '<%= pkg.config.reportDest %>/csslint-report.xml'}
      ]
    },
    src: files
  }
};
