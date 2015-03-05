(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", '$sce', function($scope, $sce) {
		$scope.myTextInput = "Mon url : <a href='http://www.animenofamily.com/'>lien</a>";
		$scope.myTextOutput = $sce.trustAsHtml($scope.myTextInput);
		$scope.myJs = $sce.trustAsJs("console.log('coucou');");

		$scope.$watch('myTextInput', function(newValue, oldValue) {
			console.log("newValue = ", newValue);
			$scope.myTextOutput = $sce.trustAsHtml(newValue);
			console.log("getTrusted = ", $sce.getTrustedHtml($scope.myTextOutput));
			console.log($scope.myTextOutput);
			console.log("beforeTrusted = ", $scope.myTextOutput.valueOf());
		});
	}]);

	app.config([ '$sceProvider', '$sceDelegateProvider', function($sceProvider, $sceDelegateProvider) {
		$sceProvider.enabled(true);
		$sceDelegateProvider.resourceUrlWhitelist([
			// Allow same origin resource loads.
			'self',
			// Allow loading from outer templates domain.
			'http://www.animenofamily.com/**'
		]);
	}]);
})();
