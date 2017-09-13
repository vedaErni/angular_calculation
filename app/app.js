'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngMessages',
  'myApp.welcome',
  'myApp.calculation',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
    $routeProvider.when('/welcome', {
        templateUrl: 'welcome/welcome.html',
        controller: 'WelcomeCtrl'
    });
    $routeProvider.when('/calculation', {
        templateUrl: 'calculation/calculation.html',
        controller: 'CalculationCtrl'
    });
  $routeProvider.otherwise({redirectTo: '/welcome'});
}]);
