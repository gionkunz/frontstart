'use strict';

var exampleViewController = require('./example-view-controller');
var exampleDirective = require('./example-directive');

module.exports = require('angular-bsfy').module('exampleFeatureModule', [
  // Regular dependencies
  require('angular-bsfy/route').name,
  // Template module dependencies (created with browserify-ng-html2js)
  require('./example-view-template.tpl.html').name,
  require('./example-directive-template.tpl.html').name
]);

module.exports.config(require('./example-route-config'));
module.exports.controller(exampleViewController.controllerName, exampleViewController);
module.exports.directive(exampleDirective.directiveName, exampleDirective);
