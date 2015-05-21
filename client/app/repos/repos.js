'use strict';

angular.module('ginApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('repos', {
        url: '/repos',
        templateUrl: 'app/repos/repos.html',
        controller: 'ReposCtrl'
      });
  });