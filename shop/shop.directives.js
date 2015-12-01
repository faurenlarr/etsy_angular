(function() {
  'use strict';

angular
  .module('shop')
  .directive('woody', function(){
    return {
      restrict: 'EA',
      templateUrl: 'shop/views/woody.directives.html',
      link: function (scope, element, attributes) {
           element.on('click', function(event) {
             element.css('color', 'red');
           });
         },
      scope: {
        shop: "="
      },
      transclude: true

    };
  });






}());
