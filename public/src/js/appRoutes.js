angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider

		.when('/bakery', {
			templateUrl: '../views/bakery.html',
			controller: 'BakeryController'
		})
		.otherwise({
			templateUrl: '../views/home.html',
			controller: 'MainController'
		});

	$locationProvider.html5Mode(true);
}]);
