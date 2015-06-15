(function() {
	'use strict';

	var app = angular.module('mainApp', []);

	app.directive('myDirective', function() {
		var priority = 800;
		return {
			restrict: 'ECA',
			priority: priority,
			compile: function(element, attrs, transclude) {
				console.log('arguments', arguments);
				console.log('priority', priority);
			}
		};
	});

	app.directive('myDirective', function() {
		var priority = 900;
		return {
			restrict: 'ECA',
			priority: priority,
			compile: function(element, attrs, transclude) {
				console.log('arguments', arguments);
				console.log('priority', priority);
			}
		};
	});
})();
