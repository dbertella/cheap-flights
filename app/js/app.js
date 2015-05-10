'use strict';

var app = angular.module('cheapFlightApp', ['ui.router', 'angucomplete-alt', 'angular-datepicker']);

//base api url -> http://ryanair-test.herokuapp.com/api
app.value('baseHttpUrl', 'http://localhost:3000/api');

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
    
    // TODO send requests with the appropriate CORS headers  
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
   
    $urlRouterProvider.otherwise("app/home");

    $stateProvider
      .state('app', {
          url: "/app",
          abstract: true,
          templateUrl: "./templates/header.html"
      })
      .state('app.home', {
          url: "/home",
          templateUrl: "./templates/home.html",
          controller: 'mainCtrl'
      })
      .state('app.details', {
          url: "/:from/:to/:startdate/:enddate",
          templateUrl: "./templates/details.html",
          controller: 'detailsCtrl'
      });
}]);