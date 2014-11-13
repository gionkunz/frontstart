'use strict';

var exampleViewController = require('./example-view-controller');
var exampleDirective = require('./example-directive');
var exampleFactory = require('./example-factory');

module.exports = require('angular-bsfy').module('exampleFeatureModule', [
  // Regular dependencies
  require('angular-bsfy/route').name,
  require('angular-bsfy/resource').name,
  // Template module dependencies (created with browserify-ng-html2js)
  require('./example-view-template.tpl.html').name,
  require('./example-directive-template.tpl.html').name
]);

module.exports.config(require('./example-route-config'));
module.exports.factory(exampleFactory.factoryName, exampleFactory);
module.exports.controller(exampleViewController.controllerName, exampleViewController);
module.exports.directive(exampleDirective.directiveName, exampleDirective);
