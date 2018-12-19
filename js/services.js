angular.module('F1FeederApp.services', [])
  .factory('ergastAPIservice', function($http, $sce) {

    var ergastAPI = {};
    ergastAPI.getDrivers = function(url) {
      return $http.get(url).then(function(response) {
        return response;
        $scope.phones = response.data;
     });
    }

    ergastAPI.getDriverDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getDriverRaces = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  });