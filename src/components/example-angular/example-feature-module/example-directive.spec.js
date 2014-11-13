'use strict';

// Load angular and ngMocks
var angular = require('angular-bsfy');
require('angular-bsfy/mocks');

//TODO: Needs some investigation why scope and isolateScope is not updated with controller value
describe('Example directive', function() {

  beforeEach(angular.mock.module(require('./index').name));

  it('should compile without errors', angular.mock.inject(function($compile, $rootScope, $interval) {

    var scope = $rootScope.$new();
    scope.tick = 2;

    var element = $compile('<example-directive tick="tick"></example-directive>')(scope);
    $rootScope.$apply();

    expect(element).toBeDefined();

    $interval.flush(1000);

    expect(element.isolateScope().exampleDirectiveCtrl.tick).toBe(7);
  }));
});
