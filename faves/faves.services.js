(function() {
  'use strict';


    angular
    .module('faves')
    .factory('FavesService',function ($http) {
      var url = 'https://tiny-tiny.herokuapp.com/collections/faves';

      var addToFaves = function (shop) {
                 $http.post(url, shop).then(function (res) {
                   console.log(res);
                 });
              };

            var getFaves = function(shop){
            return $http.get(url);
            };

            var removeFromFaves= function(shop){
                    var newUrl = url + "/" + shop;
                    console.log(newUrl);
                    $http.delete(newUrl).then(
                      function(data) {
                      console.log("SUCCY", data);
                      },function(data) {
                      console.log("ERRONEOUS", data);
                    });
                  };

              return {
                addToFaves: addToFaves,
                getFaves: getFaves,
                removeFromFaves: removeFromFaves
              };


      });


}());
