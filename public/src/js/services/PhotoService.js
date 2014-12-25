angular.module('PhotoService', []).factory('Photo', ['$http', function($http) {
	return {
		get: function() {
			return $http.get('/api/photos');
		},

		create: function(photoData) {
			return $http.post('/api/photos', photoData);
		},

		delete: function(id) {
			return $http.delete('/api/photos/' + id);
		}
	};
}]);
