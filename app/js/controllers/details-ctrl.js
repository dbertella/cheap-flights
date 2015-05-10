'use strict';

app.controller('detailsCtrl', ['$scope', '$state', '$stateParams', '$timeout', 'flightsApi', detailsCtrl]);

function detailsCtrl($scope, $state, $stateParams, $timeout, flightsApi) {
    
    $scope.forumSubmitted = true;
    $scope.showSpinner = true;
    
    $scope.from = $stateParams.from;
    $scope.to = $stateParams.to;
    $scope.startdate = $stateParams.startdate;
    $scope.enddate = $stateParams.enddate;
   
    flightsApi.getCheapFlights($scope.from, $scope.to, $scope.startdate, $scope.enddate).then(function (data) {
        $scope.showSpinner = false;
        $scope.flights = data.flights; 
    });
}