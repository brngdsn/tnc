'use strict';

angular.module('ginApp')
  .service('Issues', function ($resource) {
    var url = 'https://api.github.com/repos/:user/:repo/issues';
    var params = {user:'@user',repo:'@repo'};
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
