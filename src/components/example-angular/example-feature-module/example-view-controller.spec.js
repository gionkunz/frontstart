'use strict';

// Load angular and ngMocks
var angular = require('angular-bsfy');
require('angular-bsfy/mocks');

describe('Example view controller', function() {
  var exampleViewController = require('./example-view-controller');
  var exampleViewTemplate = require('./example-view-template.tpl.html');

  beforeEach(angular.mock.module(require('./index').name));

  it('should be injected', angular.mock.inject(function($controller, $rootScope) {
    // Instantiate a new controller with $controller and assign $rootScope and new child scope
    var exampleViewCtrl = $controller(exampleViewController.$name, {
      $scope: $rootScope.$new(),
      $rootScope: $rootScope
    });

    expect(exampleViewCtrl).not.toBeUndefined();
  }));

  it('should reverse message correctly', angular.mock.inject(function($controller, $rootScope) {
    // Instantiate a new controller with $controller and assign $rootScope and new child scope
    var exampleViewCtrl = $controller(exampleViewController.$name, {
      $scope: $rootScope.$new(),
      $rootScope: $rootScope
    });

    expect(exampleViewCtrl.message).toBe('Hello World!');
    // Call controller function to reverse message
    exampleViewCtrl.reverseMessage();
    expect(exampleViewCtrl.message).toBe('!dlroW olleH');
  }));

  it('should work with a compiled view and UI interactions', angular.mock.inject(function($controller, $rootScope, $templateCache, $compile) {
    // Construct controller expression with "controller as syntax" used in the view
    var controllerExpression = [exampleViewController.$name, 'as', 'exampleViewCtrl'].join(' ');
    // Create a new child scope of $rootScope which will be used as view model for the controller and the view
    var scope = $rootScope.$new();
    // Instantiate a new controller using the "controller as syntax" expression
    var exampleViewCtrl = $controller(controllerExpression, {
      $scope: scope,
      $rootScope: $rootScope
    });
    // Get HTML from template cache using our exampleViewTemplate module name (which is the same as the template id in the cache)
    var html = $templateCache.get(exampleViewTemplate.name);

    // Compile initial view with HTML template string and our view model
    var view = $compile(html)(scope);
    // Perform initial $digest so the view can be updated with the data from the controller
    scope.$digest();

    expect(view).not.toBeUndefined();
    expect(view.find('p').text()).toBe('Hello World!');

    // Trigger a click event on our reverse message button
    view.find('button').click();

    expect(view.find('p').text()).toBe('!dlroW olleH');

    // Call the reverseMessage() function on our controller directly
    exampleViewCtrl.reverseMessage();
    // Perform a $digest so that our view model changes get reflected into the view
    scope.$digest();

    expect(view.find('p').text()).toBe('Hello World!');
  }));
});
