(function() {
	var app = angular.module('mainApp', []);

	app.controller('MainCtrl', ['$scope', '$location', function($scope, $location) {

		$scope.url = undefined;

		$scope.$location = $location;

		$scope.changeUrl = function(url) {
			$location.path(url);
		};


	}]);
})();
