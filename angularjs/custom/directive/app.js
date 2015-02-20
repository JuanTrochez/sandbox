(function() {
	var app = angular.module("mainApp", []);


	app.directive("myInclude", function() {
		return {
			restrict: "EAC",
			transclude: true,
			templateUrl: "template.html"
		};
	});
})();
