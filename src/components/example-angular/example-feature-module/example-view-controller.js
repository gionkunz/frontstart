'use strict';

var Class = require('components/class');

module.exports = Class.extend({
  constructor: function() {
    this.message = 'Hello World!';
  },

  reverseMessage: function() {
    this.message = this.message.split('').reverse().join('');
  }
});

module.exports.controllerName = 'ExampleViewCtrl';
module.exports.$inject = [];
