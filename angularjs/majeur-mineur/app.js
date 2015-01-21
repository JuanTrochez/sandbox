(function() {
	var myApp = angular.module("myApp", []);

	myApp.controller("getAgeCtrl", [ "$scope", function($scope) {
		$scope.age = 0;
		$scope.sayStatus = function() {
			if ($scope.age < 18) {
				return "mineur";
			}
			return "majeur";
		};
	}]);
})();
