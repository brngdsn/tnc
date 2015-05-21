angular.module('gin',[])
  .controller('GinController',function($scope,$http){
    $scope.gin = "angularjs"
    $scope.onClick = function () {
      $http.get('https://api.github.com/users/'+$scope.gin+'/repos')
        .success(function(repos){
          $scope.repos = repos;
          $scope.error = false;
        })
        .error(function(e){
          $scope.error = true;
          throw new Error(e);
        })
      ;
    };
  })
;
