(function() {
  'use strict';


  angular
    .module('shop')
    .controller('ShopController', function($scope, ShopService, $routeParams, FavesService) {
      console.log('hello');
      var vm = this;
        ShopService.getShops().then(function(shops){
             vm.shops = shops;
        });

        if($routeParams.shopId){
          ShopService.getShop($routeParams.shopId).then(function(data){
            var things = data.data.results.filter(function(el) {
              return el.Shop.shop_id === parseInt($routeParams.shopId,10);
            });
            var newThings = things.map(function(el) {
              return {
                title: el.title,
                description: el.description,
                price: el.price,
                image: el.image_url_760x100
              };
            });
            vm.shop = newThings ;
          });
         }

        ShopService.seeDetails($routeParams.shopId).success(function(data){
                  vm.shop = data;
                });



                vm.addToFaves = function(shop) {
                  FavesService.addToFaves(shop);
                  alert('added to faves');

                };


    });
}());
