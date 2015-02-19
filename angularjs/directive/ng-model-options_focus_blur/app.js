(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.user = {name: "Matt", data: ""};
		$scope.focus = false;
	}]);
})();