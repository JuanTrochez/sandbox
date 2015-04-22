(function() {
	var app = angular.module('mainApp', []);

	app.controller('MainCtrl', ['$scope', function($scope) {
		$scope.myText = "A simple text with UPPER and lower case";
	}]);

})();
