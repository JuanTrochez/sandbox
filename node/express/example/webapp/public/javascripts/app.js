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

		$scope.addTodo = function() {
			console.log('adding a todo...');
			console.log('form data', $scope.formTodo);

			$http({
				url: '/todo/post',
				method: 'post',
				data: { todo: $scope.formTodo }
			}).success(function() {
				console.log('todo successfully added');
			}).error(function() {
				console.log('error posting todo');
			});


			$scope.retrieveTodoList();
		};


	}]);

})();