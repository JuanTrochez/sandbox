(function() {
	"use strict";

	var app = angular.module("mainApp", ["ui.mask"]);

	app.controller("MainCtrl", ["$scope", function($scope) {
		$scope.y = '999 - 999 - 999 - 999';
	}]);

})();
