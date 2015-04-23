(function() {
	'use strict';

	var app = angular.module('mainApp', []);

	app.controller('MainCtrl', ['$scope', function($scope) {
		$scope.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
		$scope.number = 23896238965273652;
		$scope.string = "This is a long string limited with a little bit more text : abcdefghijklmnopqrstuvwxyz";
	}]);

})();
