(function() {
	'use strict';

	var app = angular.module('mainApp', []);

	app.controller('MainCtrl', ['$injector', '$scope', function($injector, $scope) {

		var $http = $injector.get('$http');

		$scope.retrieveTodoList = function() {
			console.log('retrieving data...');

			$http({
				url: '/todo/get',
				method: 'get'
			}).success(function(data) {
				console.log('data', data);
				$scope.todoList = data;
			}).error(function() {
				console.log('error retrieving todo');
			});
		};


	}]);

})();