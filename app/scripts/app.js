/**
 * Setup of main AngularJS application, with Restangular being defined as a dependency.
 *
 * @see controllers
 * @see services
 */
var siteApp = angular.module('siteApp',
	[
		'ngRoute',
		'ngResource',
		'bootstrapLightbox',
		'angularFileUpload'
	]
);

siteApp.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'views/pages/home.html',
			controller  : 'homeController'
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
		})

		// route for the contact page
		.when('/gallery', {
			templateUrl : 'views/pages/gallery.html',
			controller  : 'galleryController'
		});
});



