'use strict';

var exampleViewController = require('./example-view-controller');
var exampleDirective = require('./example-directive');
var exampleFactory = require('./example-factory');
var exampleResource = require('./example-resource');

module.exports = require('ng').module('exampleFeatureModule', [
  // Regular dependencies
  require('ng-route').name,
  require('ng-resource').name,
  // Template module dependencies (created with browserify-ng-html2js)
  require('./example-view-template.tpl.html').name,
  require('./example-directive-template.tpl.html').name
]);

module.exports.config(require('./example-route-config'));
module.exports.factory(exampleResource.$name, exampleResource);
module.exports.factory(exampleFactory.$name, exampleFactory);
module.exports.controller(exampleViewController.$name, exampleViewController);
module.exports.directive(exampleDirective.$name, exampleDirective);
