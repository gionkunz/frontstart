'use strict';

function extractBrowserName(browser) {
  return browser.toLowerCase().split(/[ /-]/)[0];
}

module.exports = {
  live: {
    configFile: 'karma.conf.js',
    background: true,
    singleRun: false,
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    preprocessors: {
      '.tmp/fixtures/**/*.html': ['html2js']
    },
    colors: true
  },

  dist: {
    colors: false,
    configFile: 'karma.conf.js',
    singleRun: true,
    browsers: ['PhantomJS', 'Chrome', 'Firefox'],
    reporters: ['progress', 'junit', 'coverage'],
    preprocessors: {
      '.tmp/fixtures/**/*.html': ['html2js']
    },
    coverageReporter: {
      reporters:[
        {
          type: 'text-summary'
        },
        {
          type: 'cobertura',
          dir: '<%= pkg.config.reportDest %>/coverage',
          subdir: extractBrowserName
        },
        {
          type: 'html',
          dir: '<%= pkg.config.reportDest %>/coverage',
          subdir: extractBrowserName
        }
      ]

    },
    junitReporter: {
      outputFile: '<%= pkg.config.reportDest %>/unit/test-results.xml',
      suite: ''
    }
  }
};
