(function() {
  'use strict';


  angular
    .module('faves')
    .controller('FavesController', function($scope, FavesService, $routeParams) {
        FavesService.getFaves().success(function(faves){
            $scope.faves = faves;
            if($routeParams.faveId){
              $scope.fave = FavesService.getFave($scope.faves,$routeParams.faveId);
              }
        });

        $scope.addToFaves = function(shop) {
          FavesService.addToFaves(shop);
          alert('added to faves');

        };

    });
}());
