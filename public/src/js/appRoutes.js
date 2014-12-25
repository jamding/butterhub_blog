angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '../views/home.html',
			controller: 'MainController'
		})
		.when('/photos', {
			templateUrl: '../views/photo.html',
			controller: 'PhotoController'
		});

	$locationProvider.html5Mode(true);
}]);
