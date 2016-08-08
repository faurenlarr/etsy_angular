(function() {
  'use strict';


    angular
    .module('faves')
    .factory('FavesService',function ($http) {
      var url = 'https://tiny-tiny.herokuapp.com/collections/faves';

      var addToFaves = function (shop) {
                 $http.post(url, shop).then(function (res) {
                 });
              };

            var getFaves = function(shop){
            return $http.get(url);
            };

            var removeFromFaves= function(shop){
                    var newUrl = url + "/" + shop;
                    $http.delete(newUrl).then(
                      function(data) {
                      },function(data) {
                    });
                  };

              return {
                addToFaves: addToFaves,
                getFaves: getFaves,
                removeFromFaves: removeFromFaves
              };


      });


}());
