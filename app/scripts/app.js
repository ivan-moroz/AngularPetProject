/**
 * Setup of main AngularJS application, with Restangular being defined as a dependency.
 *
 * @see controllers
 * @see services
 */
var siteApp = angular.module('siteApp',
	[
		'ngRoute'
	]
);

siteApp.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'views/pages/home.html',
			controller  : 'mainController'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'views/pages/about.html',
			controller  : 'aboutController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'views/pages/contact.html',
			controller  : 'contactController'
		});
});

// create the controller and inject Angular's $scope
siteApp.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

siteApp.controller('aboutController', function($scope) {
	$scope.message = 'Look! I am an about page.';
});

siteApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us! JK. This is just a demo.';
});
