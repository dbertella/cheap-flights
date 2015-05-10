'use strict';

app.controller('mainCtrl', ['$scope', '$q', '$state', '$stateParams', '$timeout', 'flightsApi', mainCtrl]);

function mainCtrl($scope, $q, $state, $stateParams, $timeout, flightsApi) {
    $scope.from = 'DUB';
        $scope.to = 'STN';
        $scope.startdate = '2015-5-10';
        $scope.enddate = '2015-5-20';

    $q.all([
        flightsApi.getAirports()
//        flightsApi.getCountries(),
//        flightsApi.getRoutes()
    ])
    .then(function (resultSet) {
       	$scope.airports = resultSet[0];
//        $scope.countries = resultSet[1];
//    	$scope.routes = resultSet[2];
       
        
        $scope.submitForm = function(isValid) {

            // check to make sure the form is completely valid
            if (isValid) {
                
                flightsApi.getCheapFlights($scope.from, $scope.to, $scope.startdate, $scope.enddate).then(function (data) {
                    $scope.flights = data.flights;
                });
            }

        };
    });
}