angular.module('Streamer.services', [])
  .factory('APIservice', function($http, $sce) {

    var streamerAPI = {};
    streamerAPI.getDrivers = function(url) {
      return $http.get(url).then(function(response) {
        return response;
     }).catch(function(err){
       console.log('error', err);
     });
    }
    return streamerAPI;
  });