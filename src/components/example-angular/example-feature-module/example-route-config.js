'use strict';

function exampleRouteConfig($routeProvider, $locationProvider) {
  $routeProvider
    .when('/example-view', {
      templateUrl: require('./example-view-template.tpl.html').name,
      controller: require('./example-view-controller').controllerName,
      controllerAs: 'exampleViewCtrl'
    });

  // Enable HTML5 mode
  $locationProvider.html5Mode(true);
}

exampleRouteConfig.$inject = ['$routeProvider', '$locationProvider'];
module.exports = exampleRouteConfig;
