(function() {
  'use strict';


    angular
    .module('shop')
    .factory('ShopService',function ($http) {


      var urlOptions = {
        baseUrl: 'https://openapi.etsy.com/v2/listings/active.js?includes=Shop/User=',
        apiKey: '&api_key=sd11pcbe4136lyad3rfv1l4y',
        callback: '&callback=JSON_CALLBACK',
        buildUrl: function(keyword){
          return this.baseUrl + keyword + this.apiKey + this.callback;
        }
      };
      var getShop = function(shop){
        return $http.jsonp(urlOptions.buildUrl()).then(function(data){
          console.log(data.data.results.shop);
        });
      };
      var getShops = function(shops){
        return $http.jsonp(urlOptions.buildUrl(shops)).then(function(data){
          return data.data.results;
        });
      };

      var seeDetails = function(shopId){
        console.log("service",shopId);
        return $http.get(urlOptions + "/" + shopId);
      };

      var addToFaves = function (shop) {
                 $http.post(url, shop).then(function (res) {
                   console.log(res);
                 });
              };

      return {
        addToFaves: addToFaves,
        getShops : getShops,
        getShop : getShop,
        seeDetails : seeDetails
      };
    });





}());
