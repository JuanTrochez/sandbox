(function() {
	var app = angular.module('mainApp', []);

	app.controller('MainCtrl', ['$scope', '$location', function($scope, $location) {

		$scope.url = undefined;

		$scope.locArray = {
			absUrl: $location.absUrl(),
			url: $location.url(),
			protocol: $location.protocol(),
			host: $location.host(),
			port: $location.port(),
			path: $location.path(),
			search: $location.search(),
			hash: $location.hash(),
			//replace: $location.replace(),
			state: $location.state()
		};

		$scope.changeUrl = function(option) {
			if (option == 'reset') {
				$location.path('/');
			} else if (option == 'new') {
				$location.path('/foo/?bar=baz');
			} else if (option == 'hash') {
				$location.path('/foo/?bar=baz#andHash');
			}
		};

		$scope.$watchCollection(function() {
			return $location;
		}, function(newValue) {
			$scope.locArray = {
				absUrl: $location.absUrl(),
				url: $location.url(),
				protocol: $location.protocol(),
				host: $location.host(),
				port: $location.port(),
				path: $location.path(),
				search: $location.search(),
				hash: $location.hash(),
				// replace: $location.replace(),
				// state: $location.state()
			};

			return $scope.locArray;

		}, true);
		
	}]);
})();
