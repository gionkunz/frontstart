'use strict';


function stargazersFactory($resource, $q) {
  var Stargazers = $resource('https://api.github.com/repos/:owner/:repo/stargazers', {
    owner: 'gionkunz',
    repo: 'frontstart'
  });

  function getStargazersCount(params) {
    return Stargazers.query(params).$promise.then(function(data) {
      return $q.when(data.length);
    });
  }

  function getStargazersLogins(params) {
    return Stargazers.query(params).$promise.then(function(data) {
      return $q.when(data.map(function(d) {
        return d.login;
      }));
    });
  }

  function getStargazers() {
    return Stargazers;
  }

  return {
    getStargazersCount: getStargazersCount,
    getStargazersLogins: getStargazersLogins,
    getStargazers: getStargazers
  };
}

stargazersFactory.factoryName = 'exampleFactory';
stargazersFactory.$inject = ['$resource', '$q'];
module.exports = stargazersFactory;
