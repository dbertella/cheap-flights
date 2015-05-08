'use strict';

app.controller('mainCtrl', ['$scope', '$q', '$state', '$stateParams', '$timeout', 'flightsApi', mainCtrl]);

function mainCtrl($scope, $q, $state, $stateParams, $timeout, flightsApi) {
    
    $q.all([
        flightsApi.getAirports(),
        flightsApi.getCountries(),
        flightsApi.getRoutes()
    ])
    .then(function (resultSet) {
       	$scope.airports = resultSet[0];
        $scope.countries = resultSet[1];
    	$scope.routes = resultSet[2];
       
       console.log($scope);
    });
}