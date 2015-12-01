(function() {
  'use strict';

angular
  .module('shop')
  .directive('woody', function(){
    return {
      restrict: 'EA',
      templateUrl: 'shop/views/woody.directives.html',
      controller: "ShopController as shopCtrl",
      link: function (scope, element, attributes) {

     },
      scope: {
        shop: "="
      },
      transclude: true

    };
  });






}());
