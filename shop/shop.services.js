(function() {
  'use strict';


    angular
    .module('shop')
    .factory('ShopService',function ($http) {
        var url = 'https://tiny-tiny.herokuapp.com/collections/faves';


              var seeDetails = function(shopId){
                        return $http.get(url + "/" + shopId);
                      };


      var urlEtsy = {
        baseUrl: 'https://openapi.etsy.com/v2/listings/active.js?includes=Shop/User=',
        apiKey: '&api_key=sd11pcbe4136lyad3rfv1l4y',
        callback: '&callback=JSON_CALLBACK',
        buildUrl: function(keyword){
          return this.baseUrl + this.apiKey + this.callback;
        }
      };


      var getShop = function(shop){
        return $http.jsonp(urlEtsy.buildUrl());
      };

      var getShops = function(shops){
        return $http.jsonp(urlEtsy.buildUrl(shops)).then(function(data){

          return data.data.results;
        });
      };




      return {
        getShops : getShops,
        getShop : getShop,
        seeDetails : seeDetails,
      };
    });





}());
