'use strict';

angular.module('ginApp')
  .controller('MainCtrl', function ($scope, $state) {
    $scope.onSubmit = function () {
      $state.go('repos',{
        user: $scope.user
      });
    };
  });
