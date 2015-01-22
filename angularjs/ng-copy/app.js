(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.copy = false;
		$scope.text = "Copiez-moi";
		$scope.copiedText = function() {
			if ($scope.copy == true) {
				return "Vous avez copié : " + $scope.text;
			}
			return "Vous n'avez encore rien copié !";
		};
	}]);
})();
