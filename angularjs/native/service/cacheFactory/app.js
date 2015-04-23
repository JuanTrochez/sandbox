(function() {
	'use strict';

	Array.prototype.contains = function(obj) {
		var i = this.length;
		while (i--) {
			if (this[i] === obj) {
				return true;
			}
		}
		return false;
	}

	var app = angular.module('mainApp', []);

	app.controller('MainCtrl', ['$scope', '$cacheFactory', function($scope, $cacheFactory) {
		$scope.keys = [];

		$scope.cache = $cacheFactory('xxx');

		$scope.addCache = function() {
			$scope.cache.put($scope.key, $scope.value);
			if (!$scope.keys.contains($scope.key)) {
				$scope.keys.push($scope.key);
			}

			console.log('added to cache');
			console.log($scope.cache);
		};


	}]);

})();
