(function() {
  'use strict';

angular
  .module('shop')
  .directive('woody', function(){
    return {
      restrict: 'EA',
      templateUrl: 'shop/views/woody.directives.html',
      link: function (scope, element, attributes) {

      },
      scope: {
        shop: "="
      },
      transclude: true

    };
  });






}());
