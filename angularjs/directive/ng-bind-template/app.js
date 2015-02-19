(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.title = "Entrez le titre";
		$scope.content = "Entrez un contenu !";
	}]);
})();
