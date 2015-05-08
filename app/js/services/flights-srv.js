'use strict';

app.factory('flightsApi', ['$http', '$q', 'baseHttpUrl', flightsApi]);

function flightsApi($http, $q, baseHttpUrl) {
    
    /* Helpers */
    function get(resource) {
        resource = resource || '';
        var deferred = $q.defer();

        var url = baseHttpUrl + resource;
        $http.get(url)
            .success(function (data) {
                deferred.resolve(data);
            })
            .error(function (err) {
                deferred.reject(err);
            });

        return deferred.promise;

    };

    /* public interface */
    function getAirports() {
        return get('/airports');
    }

    function getCountries() {
        return get('/countries');
    }
    
    function getRoutes() {
        return get('/routes');
    }

    function getCheapFlights(from, to, start_date, end_date, max_price) {
        // GET /api/cheap-flights/:from/:to/:start_date/:end_date/:max_price
        return get('/cheap-flights' + from + '/' + to + '/' + start_date +'/' + end_date + '/' + max_price);
    }

    return {
        getAirports: getAirports,
        getCountries: getCountries,
        getRoutes: getRoutes,
        getCheapFlights: getCheapFlights
    };
}