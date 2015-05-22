'use strict';

angular.module('ginApp')
  .service('Repos', function ($resource) {
    var url = 'https://api.github.com/users/:user/repos';
    var params = {user:'@user'};
    var config = {
      get: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data, headers) {
          return JSON.parse(data);
        }
      }
    };
    return $resource(url,params,config);
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
