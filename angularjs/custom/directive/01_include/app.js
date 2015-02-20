(function() {
	var app = angular.module("mainApp", []);


	app.directive("myInclude", function() {
		return {
			restrict: "EAC",
			transclude: true,
			scope: {
				titi: "=info",
				toto: "=myInclude",
				x: "=name"
			},
			templateUrl: function(elem, attr) {
				console.log("elem = ", elem);
				console.log("attr = ", attr);
				var start = Date.now();
				return "template.html?x=" + start;
			}
			//templateUrl: "template.html"
		};
	});
})();
