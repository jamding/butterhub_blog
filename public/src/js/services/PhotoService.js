angular.module('PhotoService', []).factory('Photo', ['$http', function($http) {
	return {
		get: function(last) {
			return $http.get('/api/photos/' + last);
		},

		create: function(photoData) {
			return $http.post('/api/photos', photoData);
		},

		delete: function(id) {
			return $http.delete('/api/photos/' + id);
		}
	};
}]);
