(function() {
	'use strict';

	var app = angular.module('mainApp', []);

	app.controller('MainCtrl', ['$injector', '$scope', function($injector, $scope) {

		var $http = $injector.get('$http');

		$scope.retrieveTodoList = function() {
			console.log('retrieving data...');
			console.log('editForm', $scope.editForm);

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

			$http({
				url: '/todo/post',
				method: 'post',
				data: { todo: $scope.formTodo }
			}).success(function() {
				console.log('todo successfully added');
				$scope.retrieveTodoList();
			}).error(function() {
				console.log('error posting todo');
			});
		};

		$scope.deleteTodo = function(id) {
			console.log('deleting todo', id);

			$http({
				url: '/todo/delete',
				method: 'post',
				data: { todo: id }
			}).success(function() {
				console.log('todo successfully deleted');
				$scope.retrieveTodoList();
			}).error(function() {
				console.log('error deleting todo');
			});
		};

		$scope.editTodo = function(id, value) {
			console.log('id', id);
			$http({
				url: '/todo/edit',
				method: 'post',
				data: {
					id: id,
					name: value
				}
			}).success(function() {
				console.log('todo successfully edited');
				$scope.retrieveTodoList();
			}).error(function() {
				console.log('error updating todo');
			});
		};


	}]);

})();