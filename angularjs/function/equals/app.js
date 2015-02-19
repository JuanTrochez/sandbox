(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.equal = false;
		$scope.arg1 = null;
		$scope.arg2 = null;
		console.log(angular.equals(2, '2'));

		$scope.isEqual = function() {
			if (angular.equals($scope.arg1, $scope.arg2)) {
				$scope.equal = true;
				return;
			}
			$scope.equal = false;
		};
	}]);
})();
