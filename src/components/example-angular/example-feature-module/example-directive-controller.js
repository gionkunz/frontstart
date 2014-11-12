'use strict';

var Class = require('components/class');

module.exports = Class.extend({
  constructor: function ($interval, $scope) {
    this.tick = this.tick || 0;

    var interval = $interval(function() {
      this.tick++;
    }.bind(this), 200);

    $scope.$on('$destroy', function() {
      $interval.cancel(interval);
    });
  },

  resetTick: function() {
    this.tick = 0;
  }
});

module.exports.controllerName = 'ExampleDirectiveCtrl';
module.exports.$inject = ['$interval', '$scope'];
