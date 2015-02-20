(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.disable = false;
	}]);
})();
