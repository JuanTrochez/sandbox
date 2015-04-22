(function() {
	var app = angular.module('mainApp', []);

	app.controller('MainCtrl', ['$scope', function($scope) {
			$scope.amount = 12345;
	}]);
})();
