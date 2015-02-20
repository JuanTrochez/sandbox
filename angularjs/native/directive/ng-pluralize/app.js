(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.p1 = "Igor";
		$scope.p2 = "Jules";
		$scope.p3 = "Amélie";
		$scope.pCount = 1;
	}]);
})();
