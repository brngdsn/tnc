'use strict';

angular.module('ginApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('repos', {
        url: '/:user',
        templateUrl: 'app/repos/repos.html',
        controller: 'ReposCtrl'
      });
  });
