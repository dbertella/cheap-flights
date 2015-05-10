'use strict';

app.directive('cfFlight', function ($timeout) {

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
                $timeout(function () {
                    $scope.hide = true;
                }, 400);
            };
        },
        link: function (scope, el, attr) {
            var hideBtn = el[0].querySelector('.hide');
            var card = el[0].querySelector('.flight');
            hideBtn.addEventListener('click', function () {
                
                console.log(el[0])
                card.style.webkitTransform = 'scale(0)';
                card.style.transform = 'scale(0)';
            });
        }
    };
});