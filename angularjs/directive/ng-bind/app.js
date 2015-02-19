(function() {
	var myApp = angular.module("myApp", []);

	myApp.controller("bindTestCtrl", ["$scope", function($scope) {
			$scope.myText = "Changez ce texte";
	}]);
})();
