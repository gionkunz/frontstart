'use strict';

module.exports = function (grunt) {

  function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require(path + option);
    });

    return object;
  }

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    env: process.env
  };

  grunt.util._.extend(config, loadConfig('./tasks/config/'));

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  // Load tasks defined in ./tasks folder
  grunt.loadTasks('tasks');
  // Loading assemble manually
  grunt.loadNpmTasks('assemble');
  // Define default task
  grunt.registerTask('default', ['dist']);

  // Start grunt
  grunt.initConfig(config);
};
