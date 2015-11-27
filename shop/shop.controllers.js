(function() {
  'use strict';


  angular
    .module('shop')
    .controller('ShopController', function($scope, ShopFactory, $routeParams) {
        ShopFactory.getShops().success(function(shops){
            $scope.shops = shops;
            if($routeParams.shopId){
              $scope.shop = ShopFactory.getShop($scope.shops,$routeParams.shopId);
              }
        });


    });
}());
