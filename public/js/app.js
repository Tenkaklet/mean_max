var app = angular.module('starter', ['ngRoute','starter.controllers']);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/contacts', {
    templateUrl: 'views/contacts.html',
    controller: 'ContactsController'
  })
  .otherwise({
    redirectTo: '/'
  });

}]);
