'use strict';

module.exports = {
  dist: {
    files: [
      {
        dot: true,
        src: [
          '.tmp',
          '<%= pkg.config.dest %>',
          '<%= pkg.config.siteDest %>',
          '<%= pkg.config.reportDest %>'
        ]
      }
    ]
  },
  live: '.tmp'
};
