'use strict';

function exampleDirective() {
  return {
    restrict: 'E',
    scope: {
      tick: '='
    },
    templateUrl: require('./example-directive-template.tpl.html').name,
    controllerAs: 'exampleDirectiveCtrl',
    controller: require('./example-directive-controller')
  };
}

exampleDirective.$name = 'exampleDirective';
exampleDirective.$inject = [];
module.exports = exampleDirective;
