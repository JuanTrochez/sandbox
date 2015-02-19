(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.reference = null;
		$scope.refType = null;

		$scope.type = function(arg) {
			if (angular.isString(arg)) {
				$scope.refType = "String";
			} else if (angular.isNumber(arg)) {
				$scope.refType = "Number";
			} else {
				$scope.refType = "Type can't be defined!";
			}
		}
	}]);
})();
