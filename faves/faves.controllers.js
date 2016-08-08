(function() {
  'use strict';


  angular
    .module('faves')
    .controller('FavesController', function($scope, FavesService, $routeParams) {
      var vm = this;
        FavesService.getFaves().success(function(faves){
            $scope.faves = faves;
            // if($routeParams.faveId){
            //   $scope.fave = FavesService.getFave($scope.faves,$routeParams.faveId);
            //   }
        });

        $scope.removeFromFaves = function(shopId){
            FavesService.removeFromFaves(shopId);
          };

        vm.getFaves = function(shop){
          FavesService.getFaves(shop);
        };

    });
}());
