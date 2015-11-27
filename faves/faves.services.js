(function() {
  'use strict';


    angular
    .module('faves')
    .factory('FavesService',function ($http) {
      var url = 'https://tiny-tiny.herokuapp.com/collections/faves';

      var addToFaves = function (shop) {
                 $http.post(url, faves).then(function (res) {
                   console.log(res);
                 });
              };

            var getFaves = function(shop){
            return $http.get(url);
            };


              return {
                addToFaves: addToFaves,
                getFaves: getFaves
              };


      });


}());
