(function() {
  'use strict';

angular
    .module ('faves', [
      'ngRoute',
      'underscore',
      'moment',


    ])
    .config(function ($routeProvider) {
      $routeProvider
        // .when('/faves', {
        //   template: '<h1>Favorites</h1><a href="#/shoplist">go to shopsearch</a><a href="#/">Home</a>',
        //   controller: 'FavesController'
        // })
        .when('/faveslist', {
          templateUrl: 'faves/views/list.html',
          controller: 'FavesController'
        })
        .when('/faves/:favesId', {
          templateUrl: 'faves/views/detail.html',
          controller: 'FavesController'
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
