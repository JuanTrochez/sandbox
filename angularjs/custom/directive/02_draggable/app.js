(function() {
	"use strict";

	var app = angular.module('mainApp', []);

	app.directive('myDraggable', ['$document', function($document) {
		return function(scope, element, attr) {
			var startX = 0, startY = 0, x = 0, y = 0;

			element.css({
				position: 'relative',
				border: '1px solid red',
				backgroundColor: 'lightgrey',
				cursor: 'pointer'
			});

			element.on('mousedown', function(event) {
				// Prevent default dragging of selected content
				event.preventDefault();
				startX = event.pageX - x;
				startY = event.pageY - y;
				$document.on('mousemove', mousemove);
				$document.on('mouseup', mouseup);
			});

			function mousemove(event) {
				x = event.pageX - startX;
				y = event.pageY - startY;
				element.css({
					left:  x + 'px',
					top: y + 'px'
				});
			}

			function mouseup() {
				$document.unbind('mousemove', mousemove);
				$document.unbind('mouseup', mouseup);
			}
		};
	}]);

})();
