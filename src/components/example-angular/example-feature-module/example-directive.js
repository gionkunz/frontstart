'use strict';

module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      tick: '='
    },
    templateUrl: require('./example-directive-template.tpl.html').name,
    controllerAs: 'exampleDirectiveCtrl',
    controller: require('./example-directive-controller')
  };
};

module.exports.directiveName = 'exampleDirective';
module.exports.$inject = [];
