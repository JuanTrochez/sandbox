(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.list = [];
		$scope.text = "Mon texte";
		$scope.onSubmit = function() {
			if ($scope.text) {
				$scope.list.push($scope.text);
				$scope.text = "";
			}
		};
	}]);
})();