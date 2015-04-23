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

		$scope.moveElement = function() {
			$animate.move(angular.element('.truc').eq(0), angular.element('#move'), undefined, function() { console.log('move done'); });
		};

		$scope.addGreen = function() {
			var a = angular.element('.truc');
			var c = undefined;
			for (var i = 0; i < a.length; i++) {
				var e = a.eq(i);
				if (!e.hasClass('green')) {
					c = e;
					break;
				}
			}
			if (!c) {
				return;
			}
			$animate.addClass(c, 'green', function() { console.log('add class done'); });
		};

		$scope.removeGreen = function() {
			var a = angular.element('.truc.green');

			if (a.length == 0) {
				return;
			}

			$animate.removeClass(a.eq(0), 'green', function() { console.log('add class done'); });
		};

	}]);

})();
