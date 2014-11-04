'use strict';

var pkg = require('../../package.json');
var remapify = require('remapify');
var istanbul = require('browserify-istanbul');

function mapping(b) {

  // Remapify for easier includes of components files via additional alias
  b.plugin(remapify, [{
    src: pkg.config.source + '/components/**/*.js',
    filter: function(alias, dirname, basename) {
      // ./src/main/components/comp1/scripts/comp1.js will be available as components/comp1
      return 'components/' + basename.replace(/\.js$/, '');
    }
  }]);
}

module.exports = {
  options: {
    transform: ['debowerify', 'deamdify'],
    preBundleCB: mapping
  },
  dist: {
    files: {
      '.tmp/scripts/critical.js': ['<%= pkg.config.source %>/scripts/critical/*.js'],
      '.tmp/scripts/all.js': [
        '<%= pkg.config.source %>/components/**/*.js',
        '<%= pkg.config.source %>/scripts/all.js',
        '!<%= pkg.config.source %>/components/**/*.spec.js'
      ]
    }
  },
  live: {
    files: {
      '.tmp/scripts/critical.js': ['<%= pkg.config.source %>/scripts/critical/*.js'],
      '.tmp/scripts/all.js': [
        '<%= pkg.config.source %>/components/**/*.js',
        '<%= pkg.config.source %>/scripts/all.js',
        '!<%= pkg.config.source %>/components/**/*.spec.js'
      ],
      '.tmp/scripts/test.js': [
        '<%= pkg.config.source %>/**/*.spec.js',
        '!<%= pkg.config.source %>/bower_components/**/*'
      ]
    },
    options: {
      watch: true
    }
  },
  testOnlyWithCoverage: {
    options: {
      transform: ['debowerify', 'deamdify', istanbul({
        // Only instrument real code (no vendor stuff and no tests)
        ignore: [
          '**/vendor/**',
          '**/node_modules/**',
          '**/bower_components/**',
          '**/*.spec.js']
      })
      ]
    },
    files: {
      '.tmp/scripts/test.js': [
        '<%= pkg.config.source %>/**/*.spec.js',
        '!<%= pkg.config.source %>/bower_components/**/*'
      ]
    }
  }
};
