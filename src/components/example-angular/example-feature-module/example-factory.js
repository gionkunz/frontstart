'use strict';


function exampleFactory($q, ExampleResource) {
  function getStargazersCount() {
    return ExampleResource.query().$promise.then(function(data) {
      return $q.when(data.length);
    });
  }

  function getStargazersLogins() {
    return ExampleResource.query().$promise.then(function(data) {
      return $q.when(data.map(function(d) {
        return d.login;
      }));
    });
  }

  function getStargazers() {
    return ExampleResource;
  }

  return {
    getStargazersCount: getStargazersCount,
    getStargazersLogins: getStargazersLogins,
    getStargazers: getStargazers
  };
}

exampleFactory.$name = 'exampleFactory';
exampleFactory.$inject = ['$q', 'ExampleResource'];
module.exports = exampleFactory;
