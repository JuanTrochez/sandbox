(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.string = "";

		$scope.toJson = function() {
			$scope.json = angular.toJson($scope.string);
		}
		$scope.fromJson = function() {
			$scope.text = angular.fromJson($scope.json);
		}
	}]);
})();
