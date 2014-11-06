'use strict';

var Class = require('components/class');

var ExampleDirectiveController = Class.extend({
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

ExampleDirectiveController.$inject = ['$interval', '$scope'];

module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      tick: '='
    },
    template: '<article><div>The current tick: {{tickController.tick}}</div><button ng-click="tickController.resetTick()">reset</button></article>',
    controllerAs: 'tickController',
    controller: ExampleDirectiveController
  };
};
