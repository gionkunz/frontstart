'use strict';

module.exports = {
  options: {
    helpers: ['<%= pkg.config.source %>/helpers/**/*.js', 'node_modules/assemble-dox/dox-helpers.js'],
    partials: ['<%= pkg.config.source %>/**/*.hbs', '!<%= pkg.config.source %>/bower_components/**/*.hbs'],
    layoutdir: '<%= pkg.config.source %>/layouts',
    layoutext: '.hbs',
    layout: ['default'],
    data: ['<%= pkg.config.source %>/**/*.yml', '!<%= pkg.config.source %>/bower_components/**/*.yml'],
    plugins: ['assemble-dox'],
    dox: {
      sourceFiles: [
        '<%= pkg.config.source %>/scripts/**/*.js',
        '<%= pkg.config.source %>/components/**/*.js'
      ]
    }
  },
  pages: {
    expand: true,
    cwd: '<%= pkg.config.source %>/templates',
    src: ['**/*.hbs'],
    dest: '.tmp/pages'
  },
  fixtures: {
    expand: true,
    cwd: '<%= pkg.config.source %>/components',
    src: ['**/*.fixture.hbs'],
    dest: '.tmp/fixtures'
  }
};
