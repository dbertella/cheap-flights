'use strict';

app.controller('mainCtrl', ['$scope', '$q', '$state', '$stateParams', '$timeout', 'flightsApi', mainCtrl]);

function mainCtrl($scope, $q, $state, $stateParams, $timeout, flightsApi) {

//    test   
//    $scope.from = 'DUB';
//    $scope.to = 'STN';
//    $scope.startdate = '2015-5-10';
//    $scope.enddate = '2015-5-20';
//    flightsApi.getCheapFlights($scope.from, $scope.to, $scope.startdate, $scope.enddate).then(function (data) {
//        $scope.flights = data.flights;
//    });
    
    // date picker opt
    $scope.options = {
      format: 'yyyy-mm-dd', // ISO formatted date
      min: new Date()
    };
    
    $scope.notValid = false;
    
    flightsApi.getAirports().then(function (data) {
       	$scope.airports = data;
            
        $scope.submitForm = function(isValid, departure, arrival) {
            if ($scope.departure) {
                $scope.from = $scope.departure.originalObject.iataCode;
            } else {
                $scope.from = '';
                isValid = false;
            }
            if ($scope.arrival) {
                $scope.to = $scope.arrival.originalObject.iataCode;
            } else {
                $scope.to = '';
                isValid = false;
            }

            // check to make sure the form is completely valid
            if (isValid) {
                $scope.notValid = false;
                $scope.showSpinner = true;
                $state.go('app.details', {
                    from: $scope.from, 
                    to: $scope.to, 
                    startdate: $scope.startdate, 
                    enddate: $scope.enddate
                });
                
            } else {
                $scope.notValid = true;
            }

        };
    });
}