(function() {
	"use strict";

	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.string = "";
		$scope.message = "";

		$scope.fromJson = function() {
			$scope.message = "";
			$scope.object = undefined;
			$scope.json = undefined;
			try {
				$scope.object = angular.fromJson($scope.string);
				console.log("string:", $scope.string);
				console.log("object:", $scope.object);
				$scope.json = angular.toJson($scope.object);
			} catch (e) {
				$scope.message = "Error : " + e;
			}
		};
	}]);
})();
