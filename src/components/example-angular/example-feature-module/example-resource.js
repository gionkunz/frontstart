'use strict';


function ExampleResource($resource) {
  return $resource('https://api.github.com/repos/:owner/:repo/stargazers', {
    owner: 'gionkunz',
    repo: 'frontstart'
  });
}

ExampleResource.$name = 'ExampleResource';
ExampleResource.$inject = ['$resource'];
module.exports = ExampleResource;
