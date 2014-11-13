'use strict';

// Load angular and ngMocks
var angular = require('angular-bsfy');
require('angular-bsfy/mocks');

describe('Example factory', function() {
  var mockData = [
    {login: 'user1', junk_data: 123456},
    {login: 'user2', junk_data: 123456},
    {login: 'user3', junk_data: 123456},
    {login: 'user4', junk_data: 123456}
  ];

  beforeEach(angular.mock.module(require('./index').name));

  beforeEach(angular.mock.inject(function($httpBackend) {
    // Set up the mock http service responses
    $httpBackend.when('GET', 'https://api.github.com/repos/gionkunz/frontstart/stargazers')
      .respond(mockData);
    $httpBackend.when('GET', 'https://api.github.com/repos/substack/node-browserify/stargazers')
      .respond(mockData);
  }));

  afterEach(angular.mock.inject(function($httpBackend) {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));

  it('should count users correctly', angular.mock.inject(function(exampleFactory, $httpBackend) {

    $httpBackend.expectGET('https://api.github.com/repos/gionkunz/frontstart/stargazers');

    exampleFactory.getStargazersCount().then(function(count) {
      expect(count).toBe(mockData.length);
    });

    $httpBackend.flush();
  }));

  it('should list only logins and in correct order', angular.mock.inject(function(exampleFactory, $httpBackend) {

    $httpBackend.expectGET('https://api.github.com/repos/gionkunz/frontstart/stargazers');

    exampleFactory.getStargazersLogins().then(function(logins) {
      expect(logins).toEqual(mockData.map(function(d) {
        return d.login;
      }));
    });

    $httpBackend.flush();
  }));

  it('can also provide Resource directly to query different repository', angular.mock.inject(function(exampleFactory, $httpBackend) {

    $httpBackend.expectGET('https://api.github.com/repos/substack/node-browserify/stargazers');

    exampleFactory.getStargazers().query({
      owner: 'substack',
      repo: 'node-browserify'
    });

    $httpBackend.flush();
  }));
});
