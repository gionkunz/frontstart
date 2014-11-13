'use strict';

// Load angular and ngMocks
var angular = require('angular-bsfy');
require('angular-bsfy/mocks');

describe('Example factory', function() {
  var stargazersHandler,
    mockData = [{
      login: 'user1'
    }, {
      login: 'user2'
    }, {
      login: 'user3'
    }, {
      login: 'user4'
    }];

  beforeEach(angular.mock.module(require('./index').name));

  beforeEach(angular.mock.inject(function($httpBackend) {
    // Set up the mock http service responses
    stargazersHandler = $httpBackend.when('GET', 'https://api.github.com/repos/gionkunz/frontstart/stargazers')
      .respond(mockData);
  }));

  afterEach(angular.mock.inject(function($httpBackend) {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));

  it('should work with mocked $http service', function(done) {

    /*angular.mock.inject(function(exampleFactory, $httpBackend, $q) {
      $httpBackend.expectGET('https://api.github.com/repos/gionkunz/frontstart/stargazers');

      $q.all(exampleFactory.stargazersCount(), exampleFactory.stargazersLogins()).then(function(count, logins) {
        console.log(count, logins);

        expect(count).toBe(mockData.length);
        expect(logins).toEqual(mockData.map(function(d) {
          return d.login;
        }));*/

        done();
    /*  });
    });*/
  });
});
