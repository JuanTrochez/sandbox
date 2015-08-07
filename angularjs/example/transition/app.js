(function() {
	'use strict';

	var app = angular.module('mainApp', ['ngAnimate']);

	app.controller('MainCtrl', ['$scope', function($scope) {

		$scope.mainImgUrl = 'http://www.gettyimages.co.uk/gi-resources/images/Homepage/Category-Creative/UK/UK_Creative_462809583.jpg';

		$scope.setImage = function(image) {
			$scope.mainImgUrl = image;
		};

		$scope.slides = [
			{
				img: 'http://www.gettyimages.co.uk/gi-resources/images/Homepage/Category-Creative/UK/UK_Creative_462809583.jpg'
			},
			{
				img: 'http://i.dailymail.co.uk/i/pix/2015/01/06/2473100D00000578-2898639-Photographer_Andrey_Gudkov_snapped_the_images_on_the_plains_of_t-a-20_1420546215677.jpg'
			}
		];

	}]);
})();
