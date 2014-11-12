'use strict';

var Class = require('components/class');

module.exports = Class.extend({
  constructor: function () {
    this.welcomeMessage = 'Hello World!';
  }
});

module.exports.controllerName = 'ExampleViewCtrl';
module.exports.$inject = [];
