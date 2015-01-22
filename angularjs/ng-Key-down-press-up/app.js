(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.down = 0;
		$scope.press = 0;
		$scope.up = 0;

		$scope.onDown = function() {
			$scope.down++;
		};

		$scope.onPress = function() {
			$scope.press++;
		};

		$scope.onUp = function() {
			$scope.up++;
		};
	}]);
})();