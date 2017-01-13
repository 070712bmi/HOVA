	// create the module and name it ShortApp
	var ShortApp = angular.module('ShortApp', ['ngRoute']);

	// configure our routes
	ShortApp.config(function($routeProvider) {
		$routeProvider

		// route for the home page
		.when('/', {
			templateUrl: 'pages/app.html',
			controller: 'MainController'
		})
	});

	// create the controller and inject Angular's $scope
	ShortApp.controller('MainController', function($scope, ShortenServices) {

	});

	ShortApp.controller('AdminController', function($scope) {
	});

	ShortApp.service('ShortenServices', function($http) {
	
	})

	ShortApp.service('GetShortenHistoryServices', function($http) {
		
	})