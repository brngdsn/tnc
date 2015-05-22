'use strict';

angular.module('ginApp')
  .controller('IssuesCtrl', function ($scope, $stateParams, Issues) {
    $scope.user = $stateParams.user;
    $scope.repo = $stateParams.repo;
    $scope.issues = Issues.get({
      user: $scope.user,
      repo: $scope.repo
    });
  });
