(function() {
	var app = angular.module("mainApp", []);

	app.controller("MainCtrl", ["$scope", function($scope) {
		$scope.names = ["Arthur", "Kate", "Jhon", "James", "Laura"];
	}]);
})();
