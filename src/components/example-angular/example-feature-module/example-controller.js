'use strict';

var Class = require('components/class');

module.exports = Class.extend({
  constructor: function ($timeout, $window) {
    $timeout(function() {
      $window.document.title = 'Example Angular Application';
      this.status = 'done';
    }.bind(this), 5000);

    this.status = 'scheduled';
    this.tick = 0;
  }
});

module.exports.$inject = ['$timeout', '$window'];
