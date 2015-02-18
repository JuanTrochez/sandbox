(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.admin = {};
		$scope.user = {};


		$scope.save = function(destination, person) {
			if (destination == "admin") {
				$scope.admin = angular.copy(person);
				return 0;
			}
			
			$scope.user = angular.copy(person);
		}

		$scope.load = function(source) {
			if (source == "admin") {
				angular.copy($scope.admin, $scope.person);
				return 0;
			}
			angular.copy($scope.user, $scope.person);
		}

		$scope.reset = function() {
			$scope.person = {};
		}
	}]);
})();
