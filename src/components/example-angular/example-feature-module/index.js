'use strict';

module.exports = require('angular-bsfy').module('exampleFeatureModule', [
  require('./example-template.tpl.html').name
]);

module.exports.controller('ExampleCtrl', require('./example-controller'));
module.exports.directive('exampleDirective', require('./example-directive'));
