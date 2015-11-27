(function() {
  'use strict';


  angular
    .module('shop')
    .controller('ShopController', function($scope, ShopService, $routeParams) {
        ShopService.getShops().then(function(shops){
            $scope.shops = shops;
            if($routeParams.shopId){
              $scope.shop = ShopService.getShop($scope.shops,$routeParams.shopId);
              }
        });

        ShopService.seeDetails($routeParams.shopId).success(function(data){
                  console.log("custdetail" ,data);
                  $scope.shop = data;
                });
    });
}());
