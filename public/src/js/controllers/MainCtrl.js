angular.module('MainCtrl', []).controller('MainController', ['$scope', 'Photo', function($scope, Photo) {
	Photo.get()
	.success(function(data) {
		$scope.photos = data;
		console.log(data);
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});
}]);
