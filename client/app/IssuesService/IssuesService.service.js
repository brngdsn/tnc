'use strict';

angular.module('ginApp')
  .service('IssuesService', function () {
    return $resource('https://api.github.com/repos/:gin/:repo/issues', {
      gin: '@gin',
      repos: '@repos'
    }, {
      get: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data, headers) {
          return JSON.parse(data);
        }
      }
    });
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
