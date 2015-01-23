(function() {
	var app = angular.module("myApp", []);

	app.controller("ExampleCtrl", ["$scope", function($scope) {
		$scope.clothes = [
			{name: "T-shirt", category: "Hauts"},
			{name: "casquette", category: "Hauts"},
			{name: "Pantalon", category: "Bas"},
			{name: "Chaussures", category: "Bas"},
			{name: "Collier", category: "Accessoires"},
			{name: "Bracelet", category: "Accessoires"}
		];
		$scope.cloth = $scope.clothes[0];
		$scope.hauts = $scope.clothes["Hauts"];
	}]);
})();