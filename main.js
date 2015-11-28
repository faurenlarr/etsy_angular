(function () {
  "use strict";

  angular
    .module('etsy', [
      'ngRoute',
      'underscore',
      'moment',
      'faves',
      'shop',
    ])
    .config(function ($routeProvider) {
      $routeProvider
        // .when('/', {
        //   template: '<h1 class="mainpage">Welcome to Etsy</h1><a href="#/shoplist" class="mainsearch">Search by Shop</a><a href="#/faveslist" class="mainfavorites">Favorites</a>',
        //   controller: 'EtsyController'
        // })
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

})();
