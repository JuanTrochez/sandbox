(function() {
	var app = angular.module("myApp", ["ngSanitize"]);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.myText = "Voici un texte avec du <b>code</b> <i>html</i> et comportant un <a href='http://www.animenofamily.com/'>lien</a> !";
	}]);
})();
