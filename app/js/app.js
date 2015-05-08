'use strict';

var app = angular.module('cheapFlightApp', ['ui.router']);

//base api url
app.value('baseHttpUrl', '/api');

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
    
    // TODO send requests with the appropriate CORS headers  
    //$httpProvider.defaults.useXDomain = true;
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
   
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('home', {
          url: "/home",
          templateUrl: "/www/app/templates/home.html",
          controller: 'mainCtrl'
      })
      .state('detail', {
          url: "/detail",
          templateUrl: "/www/app/templates/detail.html",
          controller: 'detailCtrl'
      });
}]);