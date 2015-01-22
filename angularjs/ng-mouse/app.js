(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.down = 0;
		$scope.enter = 0;
		$scope.leave = 0;
		$scope.move = 0;
		$scope.over = 0;
		$scope.up = 0;

		$scope.onDown = function() {
			$scope.down++;
		};

		$scope.onEnter = function() {
			$scope.enter++;
		};

		$scope.onLeave = function() {
			$scope.leave++;
		};

		$scope.onMove = function() {
			$scope.move++;
		};

		$scope.onOver = function() {
			$scope.over++;
		};

		$scope.onUp = function() {
			$scope.up++;
		};
	}]);
})();