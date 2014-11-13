'use strict';

function ExampleDirectiveController($interval, $scope) {
  this.tick = $scope.tick || 0;

  this.resetTick = function resetTick() {
    this.tick = 0;
  };

  var interval = $interval(function() {
    this.tick++;
  }.bind(this), 200);

  $scope.$on('$destroy', function() {
    $interval.cancel(interval);
  });
}

ExampleDirectiveController.controllerName = 'ExampleDirectiveCtrl';
ExampleDirectiveController.$inject = ['$interval', '$scope'];
module.exports = ExampleDirectiveController;
