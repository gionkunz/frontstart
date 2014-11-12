'use strict';

module.exports = function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/example-view', {
      templateUrl: require('./example-view-template.tpl.html').name,
      controller: require('./example-view-controller').controllerName,
      controllerAs: 'exampleViewCtrl'
    });

  // Enable HTML5 mode
  $locationProvider.html5Mode(true);
};

module.exports.$inject = ['$routeProvider', '$locationProvider'];
