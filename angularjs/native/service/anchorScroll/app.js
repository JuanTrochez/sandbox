(function() {
	'use strict';

	var app = angular.module('mainApp', []);

	app.controller('MainCtrl', ['$scope', '$anchorScroll', '$location', function($scope, $anchorScroll, $location) {
		$scope.goToAnchor = function() {
			//Set the anchor and $anchorScroll will scroll automatically
			//doesn't work if $anchorScroll is not injected
			$location.hash('anchor');

			$anchorScroll();
			console.log('done');
		}
	}]);
})();
