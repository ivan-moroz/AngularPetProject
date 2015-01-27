/**
 * Created by Ivan_Moroz on 12/22/2014.
 */
siteApp.config(function (LightboxProvider) {
	// set a custom template
	LightboxProvider.templateUrl = 'views/partial/gallery-lightbox.html';
});


siteApp.directive('gallery', ['$compile', 'Gallery', function($compile, Gallery) {
	return {
		restrict: 'E',
		replace: true,
		controller: function($scope) {
			$scope.images = Gallery.get();
		},
		templateUrl: '../../../views/partial/gallery.html'
	};
}]);
