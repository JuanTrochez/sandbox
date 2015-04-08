(function() {
	'use strict';

	var app = angular.module('mainApp', []);

	app.controller('MainCtrl', ['$scope', function($scope) {
		$scope.myInput = 'hey1$é';
	}]);

	app.filter('forbid', function() {
		return function(input, typeIn) {
			if (typeIn == 'num') {
				var output = input.replace(/[^0-9]/gi, '');
				console.log('num ' +output);
				return output;

			} else if (typeIn == 'string') {
				var output = input.replace(/[^a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s]/gi, '');
				console.log('string ' +output);
				return output;
			} else if (typeIn == 'special') {
				var output = input.replace(/[A-Za-z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]/gi, '');
				console.log('special ' +output);
				return output;
			} else {
				return input;
			}
		};
	});

	app.directive('numberOnlyInput', function () {
	    return {
	        restrict: 'EA',
	        template: '<input name="{{inputName}}" ng-model="inputValue" />',
	        scope: {
	            inputValue: '=',
	            inputName: '='
	        },
	        link: function(scope) {
	            scope.$watch('inputValue', function(newValue,oldValue) {
	                var arr = String(newValue).split('');
	                if (arr.length === 0) return;
	                if (arr.length === 1 && (arr[0] == '-' || arr[0] === '.' )) return;
	                if (arr.length === 2 && newValue === '-.') return;
	                if (isNaN(newValue)) {
	                    scope.inputValue = oldValue;
	                }
	            });
	        }
	    };
	});
})();
