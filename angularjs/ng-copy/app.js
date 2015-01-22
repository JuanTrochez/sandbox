(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.text = "Copiez-moi";
		$scope.message = "";
		$scope.copy = function() {
			$scope.message = "Vous avez copié : " + $scope.text;
		};
	}]);
})();
