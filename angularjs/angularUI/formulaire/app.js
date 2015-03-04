(function() {
	var app = angular.module("mainApp", []);

	app.controller("MainCtrl", ["$scope", function($scope) {

		$scope.doSomething = function() {
			console.log("something");
		};

	}]);
})();
