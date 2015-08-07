(function() {

	'use strict';

	var app = angular.module('mainApp', ['ionic', 'ngCordova']);

	app.run(['$injector', function($injector) {
		console.log('run app');

		var $rootScope = $injector.get('$rootScope');
		var $cordovaVibration = $injector.get('$cordovaVibration');
		var $cordovaBatteryStatus  = $injector.get('$cordovaBatteryStatus');
		var $cordovaGeolocation  = $injector.get('$cordovaGeolocation');

		document.addEventListener("deviceready", function () {
			$cordovaPlugin.someFunction().then(success, error);
		}, false);

		$rootScope.vibrate = function() {
			$cordovaVibration.vibrate(100);
		}

		$rootScope.$on("$cordovaBatteryStatus:status", function(event, args) {
			$rootScope.battery = args.level;
		});

		$rootScope.locate = function() {
			$cordovaGeolocation.getCurrentPosition().then(function (position) {
				$rootScope.lat  = position.coords.latitude
				$rootScope.long = position.coords.longitude
			});
		};

	}]);

	app.config(['$injector', function($injector) {
		var $stateProvider = $injector.get('$stateProvider');
		var $urlRouterProvider = $injector.get('$urlRouterProvider');
		var $ionicConfigProvider = $injector.get('$ionicConfigProvider');

		$ionicConfigProvider.tabs.position('bottom');

		$stateProvider
			.state('tabs', {
				url: "/tab",
				abstract: true,
				templateUrl: "templates/tabs.html"
			})
			.state('tabs.home', {
				url: "/home",
				views: {
					'home-tab': {
						templateUrl: "templates/home.html"
					}
				}
			})
			.state('tabs.friends', {
				url: "/friends",
				views: {
					'friends-tab': {
						templateUrl: "templates/friends.html"
					}
				}
			})
			.state('tabs.contact', {
				url: "/contact",
				views: {
					'contact-tab': {
						templateUrl: "templates/contact.html"
					}
				}
			});


		$urlRouterProvider.otherwise("/tab/home");

	}]);


})();
