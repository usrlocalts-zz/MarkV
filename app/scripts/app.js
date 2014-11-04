'use strict';

/**
 * @ngdoc overview
 * @name markVApp
 * @description
 * # markVApp
 *
 * Main module of the application.
 */
angular
  .module('markVApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {

      })

      .otherwise({
        redirectTo: '/'
      });
  });
