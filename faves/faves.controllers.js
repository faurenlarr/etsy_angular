(function() {
  'use strict';


  angular
    .module('faves')
    .controller('FavesController', function($scope, FavesFactory, $routeParams) {
        FavesFactory.getFaves().success(function(faves){
            $scope.faves = faves;
            if($routeParams.faveId){
              $scope.fave = FavesFactory.getFave($scope.faves,$routeParams.faveId);
              }
        });


    });
}());
