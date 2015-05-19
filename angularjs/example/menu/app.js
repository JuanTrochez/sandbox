(function() {
	'use strict';

	var app = angular.module('mainApp', []);

	app.controller('MainCtrl', ['$scope', '$location', function($scope, $location) {
		$scope.$location = $location;
		$scope.myCheck = 'not checked';
		$scope.showMenu = false;


		$scope.$watch(function() { 
			return $location.url(); 
		}, function(newValue) {
			if ($location.search().menuActive == 1) {
				$scope.showMenu = true;
			} else {
				$scope.showMenu = false;
			}
		});

	}]);
})();
