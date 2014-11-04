'use strict';

var rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest;

module.exports = {
  options: {
    port: '<%= pkg.config.connectPort %>',
    hostname: '<%= pkg.config.connectHost %>'
  },
  rules: [
    // Internal rewrite
    {from: '^/resources/(.*)$', to: '/$1'}
  ],
  live: {
    options: {
      open: true,
      base: [
        '.tmp',
        '<%= pkg.config.source %>',
        '.',
        '.tmp/pages'
      ],
      livereload: 35729,
      middleware: function (connect, options) {
        var middlewares = [];

        // RewriteRules support
        middlewares.push(rewriteRulesSnippet);

        if (!Array.isArray(options.base)) {
          options.base = [options.base];
        }

        var directory = options.directory || options.base[options.base.length - 1];
        options.base.forEach(function (base) {
          // Serve static files.
          middlewares.push(connect.static(base));
        });

        // Make directory browse-able.
        middlewares.push(connect.directory(directory));

        return middlewares;
      }
    }
  },
  dist: {
    options: {
      base: '<%= pkg.config.siteDest %>',
      open: true,
      keepalive: true
    }
  }
};