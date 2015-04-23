(function() {
	'use strict';

	var app = angular.module('mainApp', []);

	app.controller('MainCtrl', ['$scope', function($scope) {
		$scope.sites = [
			{ name: 'Facebook', url: 'https://www.facebook.com/' },
			{ name: 'Twitter', url: 'https://twitter.com/' },
			{ name: 'Angular JS', url: 'https://angularjs.org/' },
			{ name: 'ANF', url: 'http://www.animenofamily.com/' },
			{ name: 'Youtube', url: 'https://www.youtube.com/' },
			{ name: 'Dailymotion', url: 'http://www.dailymotion.com/' },
			{ name: 'Feedly', url: 'https://feedly.com/' },
			{ name: 'Rutube', url: 'http://rutube.ru/' }
		];
	}]);

})();
