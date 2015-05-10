'use strict';

app.directive('cfFlight', function () {

    return {
        restrict: 'E',
        scope: {
            flight: '='
        },
        templateUrl: './templates/dir/flight.html',
        controller: function ($scope) {
            $scope.selected = false;
            $scope.selectThis = function (selected) {
                $scope.selected = !selected;
            };
            $scope.hideThis = function () {
                $scope.hide = true;
            }
        }
    };
});