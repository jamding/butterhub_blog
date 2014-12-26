angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '../views/home.html',
			controller: 'MainController'
		})
		.when('/bakery', {
			templateUrl: '../views/bakery.html',
			controller: 'BakeryController'
		});

	$locationProvider.html5Mode(true);
}]);
