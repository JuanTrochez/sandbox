(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.equal = false;
		$scope.arg1 = null;
		$scope.arg2 = null;

		$scope.isEqual = function() {
			if (angular.equals($scope.arg1, $scope.arg2)) {
				$scope.equal = true;
				return 0;
			}
			$scope.equal = false;
		};
	}]);
})();
