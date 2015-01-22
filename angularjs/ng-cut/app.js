(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.message = "";
		
		$scope.cut = function() {
			$scope.message = "Vous avez coupé le texte !";
		};
	}]);
})();
