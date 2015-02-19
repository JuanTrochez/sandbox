(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.string = "";

		$scope.toUpper = function() {
			$scope.upper = angular.uppercase($scope.string);
		}
	}]);
})();
