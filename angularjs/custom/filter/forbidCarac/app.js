(function() {
	"use strict";

	var app = angular.module("mainApp", []);

	app.controller("MainCtrl", ["$scope", function($scope) {
		$scope.myInput = "hey1$é";
	}]);

	app.filter("forbid", function() {
		return function(input, typeIn) {
			if (typeIn == 'num') {
				var output = input.replace(/[^0-9]/gi, '');
				console.log("num " +output);
				return output;

			} else if (typeIn == "string") {
				var output = input.replace(/[^a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s]/gi, '');
				console.log("string " +output);
				return output;
			} else if (typeIn == "special") {
				var output = input.replace(/[A-Za-z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]/gi, '');
				console.log("special " +output);
				return output;
			} else {
				return input;
			}
		};
	});
})();
