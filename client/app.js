var app = angular.module('zips', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'zipsController'
    })
    .when('/zips', {
      templateUrl: 'partials/zips.html',
      controller: 'zipsController'
    })
    .when('/zip/:_id', {
      templateUrl: 'partials/zip.html',
      controller: 'zipController'
    })
    .otherwise('/');
});
