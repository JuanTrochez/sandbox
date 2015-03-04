(function() {
	var app = angular.module("mainApp", []);

	app.run([ "$templateCache", function($templateCache) {
		$templateCache.put('templateId.html', 'This is the content of the template');
	}]);

	app.controller("MainCtrl", ["$scope", "$templateCache", function($scope, $templateCache) {
		$scope.template = $templateCache.get('templateId.html');
	}]);
})();
