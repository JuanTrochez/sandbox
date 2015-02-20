(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.myVar = undefined;
		$scope.definition = function() {
			$scope.isUndefined = angular.isUndefined($scope.myVar);
			$scope.isDefined = angular.isDefined($scope.myVar);
		};
		$scope.reset = function() {
			$scope.myVar = undefined;
			$scope.definition();
		};
		$scope.definition();
	}]);
})();
