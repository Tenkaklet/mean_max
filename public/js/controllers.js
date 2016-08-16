var app = angular.module('starter.controllers', []);

app.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
  console.log('Homie!');
  $http.get('/api')
  .then(function (res) {
    console.log(res);
  });
}]);

app.controller('ContactsController', ['$scope', '$http', function ($scope, $http) {
  console.log('Contacts');
  $http.get('/api')
  .then(function (res) {
    console.log(res);
  });
}]);
