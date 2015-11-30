(function() {
  'use strict';


  angular
    .module('shop')
    .controller('ShopController', function($scope, ShopService, $routeParams, FavesService) {
      var vm = this;
        ShopService.getShops().then(function(shops){
             vm.shops = shops;
        });

        if($routeParams.shopId){
          ShopService.getShop($routeParams.shopId).then(function(data){
            var things = data.data.results.filter(function(el) {
              console.log(el.Shop.shop_id === $routeParams.shopId);
              return el.Shop.shop_id === parseInt($routeParams.shopId,10);
            });
            var newThings = things.map(function(el) {
              console.log("YAY",el);
              return {
                title: el.title,
                description: el.description
              };
            });
            vm.shop = newThings;
          });
         }

        ShopService.seeDetails($routeParams.shopId).success(function(data){
                  console.log("custdetail" ,data);
                  vm.shop = data;
                });



                vm.addToFaves = function(shop) {
                  FavesService.addToFaves(shop);
                  alert('added to faves');

                };


    });
}());
