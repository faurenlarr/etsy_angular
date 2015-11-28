(function() {
  'use strict';


  angular
    .module('faves')
    .controller('FavesController', function($scope, FavesService, $routeParams) {
        FavesService.getFaves().success(function(faves){
          console.log('thingy: ',faves);
            $scope.faves = faves;
            // if($routeParams.faveId){
            //   $scope.fave = FavesService.getFave($scope.faves,$routeParams.faveId);
            //   }
        });


        $scope.getFaves = function(shop){
          FavesService.getFaves(shop);
        };

    });
}());
