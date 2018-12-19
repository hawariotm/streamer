angular.module('F1FeederApp', [
  'F1FeederApp.services',
  'F1FeederApp.controllers',
  'myApp.directives',
  'ngRoute',
  'ui.bootstrap',
  'angular-inview'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"}).
	otherwise({redirectTo: '/drivers'});
}]);