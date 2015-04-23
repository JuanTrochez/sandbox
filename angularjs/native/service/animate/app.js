(function() {
	'use strict';

	var app = angular.module('mainApp', []);

	app.controller('MainCtrl', ['$scope', '$animate', function($scope, $animate) {
		var a = 0;
		var e = function() {
			a++;
			return angular.element('<span class="truc">Element ' + a + '<br/></span>');
		};

		$scope.addElementAfter = function() {
			$animate.enter(e(), undefined, angular.element('#after'), function() { console.log('after done'); });
		};

		$scope.addElementOnParent = function() {
			$animate.enter(e(), angular.element('#parent'), undefined, function() { console.log('parent done'); });
		};

		$scope.remove = function() {
			$animate.leave(angular.element('.truc').eq(0), function() { console.log('remove done'); });
		};

	}]);

})();
