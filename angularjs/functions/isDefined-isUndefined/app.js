(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {

		$scope.definition = function(arg) {
			if (angular.isUndefined(arg)) {
				$scope.state = "Undefined";
			} else if (angular.isDefined(arg)) {
				$scope.state = "Defined";
			} else {
				$scope.state = "Can't define!";
			}
		}
	}]);
})();
