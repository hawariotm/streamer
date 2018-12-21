angular.module('Streamer', [
  'Streamer.services',
  'Streamer.controllers',
  'ngRoute',
  'ui.bootstrap',
  'angular-inview'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/streamer", {templateUrl: "partials/streamers.html", controller: "streamerController"}).
	otherwise({redirectTo: '/streamer'});
}]);