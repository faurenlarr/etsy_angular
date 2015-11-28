(function() {
  'use strict';

angular
    .module('shop', [
        'ngRoute',
        'underscore',
        'moment'

    ])
    .config(function ($routeProvider) {
      $routeProvider

        .when('/', {
          templateUrl: 'shop/views/list.html',
          controller: 'ShopController'
        })
        .when('/shop/:shopId', {
          templateUrl: 'shop/views/detail.html',
          controller: 'ShopController'
        })
        .when('/404', {
          template: '<h1> Sorry, page not found!</h1>'
        })
        .otherwise({ redirectTo: '/404'});
    });




    angular
      .module('underscore', [])
      .factory('_', function ($window) {
        return $window._;
      });
    angular
      .module('moment', [])
      .factory('moment', function ($window) {
        return $window.moment;
      });



}());
