'use strict';

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine-jquery', 'jasmine'],
    preprocessors: {
      '.tmp/fixtures/**/*.html': ['html2js']
    },
    files: [
      '.tmp/fixtures/**/*.html',
      'src/bower_components/es5-shim/es5-shim.min.js',
      '.tmp/scripts/test.js',
      '.tmp/styles/all.css'
    ]
  });
};
