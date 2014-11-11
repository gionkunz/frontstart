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
    templateUrl: require('./example-template.tpl.html').name,
    controllerAs: 'tickController',
    controller: ExampleDirectiveController
  };
};
