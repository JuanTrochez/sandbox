(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.counter = 0;
		$scope.change = function() {
			$scope.counter++;
		};
	}]);
})();
