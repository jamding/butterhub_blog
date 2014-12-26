angular.module('MainCtrl', []).controller('MainController', ['$scope', 'Photo', function($scope, Photo) {


	$scope.footer_text = 'This is a test!';
	
	var huge_list = [];
	var big_list = [];

	$scope.enlarge = function(div_id) {
		if(huge_list.indexOf(div_id) > -1) {
			console.log('huge');
			$('#' + div_id).removeClass('col-md-8');
			$('#' + div_id).removeClass('col-sm-12');
			$('#' + div_id).addClass('col-sm-4');
			$('#' + div_id).addClass('col-md-3');
			
			var idx2 = huge_list.indexOf(div_id);
			delete huge_list[idx2];
		} else if(big_list.indexOf(div_id) > -1) {
			console.log('big');
			//make it huge, remove it from the big list
			$('#' + div_id).removeClass('col-md-6');
			$('#' + div_id).removeClass('col-sm-8');
			$('#' + div_id).addClass('col-sm-12');
			$('#' + div_id).addClass('col-md-8');
			huge_list.push(div_id);
			
			var idx = big_list.indexOf(div_id);
			delete big_list[idx];
		} else {
			//make it big, add to big list
			console.log('small');
			$('#' + div_id).removeClass('col-md-3');
			$('#' + div_id).removeClass('col-sm-4');
			$('#' + div_id).addClass('col-sm-8');
			$('#' + div_id).addClass('col-md-6');
			big_list.push(div_id);
		}
		
	};
	
	var last_epoch = Date.now();
	
	$scope.ajaxUpdate = function() {
		Photo.get(last_epoch)
		.success(function(data) {
			if(data.length === 0) {
				$('#ajaxButton').hide();
				$('#myMessage').show();
				return;
			}
			$scope.photos.push.apply($scope.photos, data);
			console.log(data);
			last_epoch = data[data.length - 1].epoch;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};
	
	Photo.get(last_epoch)
	.success(function(data) {
		$scope.photos = data;
		console.log(data);
		last_epoch = data[data.length - 1].epoch;
		console.log(last_epoch);
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});
	
	$scope.deletePhoto = function(data) {
		console.log(data);
	};
	
	
	$scope.showName = function(text) {
		$scope.footer_text = text.replace('_', ' ');
		$scope.hidden = false;
	};
	
	$scope.hideName = function() {
		$scope.hidden = true;
	};
}]);
