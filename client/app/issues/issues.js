'use strict';

angular.module('ginApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('issues', {
        url: '/:user/:repo',
        templateUrl: 'app/issues/issues.html',
        controller: 'IssuesCtrl'
      });
  });
