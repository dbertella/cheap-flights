'use strict';

var app = angular.module('cheapFlightApp', ['ui.router']);

//base api url -> http://ryanair-test.herokuapp.com/api
app.value('baseHttpUrl', 'http://localhost:9002/api');

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
    
    // TODO send requests with the appropriate CORS headers  
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
   
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('home', {
          url: "/home",
          templateUrl: "./templates/home.html",
          controller: 'mainCtrl'
      })
      .state('detail', {
          url: "/detail",
          templateUrl: "./templates/detail.html"
      });
}]);