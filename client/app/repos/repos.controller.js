'use strict';

angular.module('ginApp')
  .controller('ReposCtrl', function ($scope, $stateParams, Repos) {
    $scope.user = $stateParams.user;
    $scope.repos = Repos.get({
      user: $scope.user
    });
  });
