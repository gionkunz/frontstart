'use strict';

module.exports = require('angular').module('exampleFeatureModule', []);

module.exports.controller('ExampleCtrl', require('./example-controller'));
module.exports.directive('exampleDirective', require('./example-directive'));
