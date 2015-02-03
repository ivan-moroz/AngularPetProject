/**
 * Created by Ivan_Moroz on 12/22/2014.
 */
siteApp.config(function (LightboxProvider) {
	// set a custom template
	LightboxProvider.templateUrl = 'views/partial/gallery/gallery-lightbox.html';

	LightboxProvider.getImageUrl = function (image) {
		return image.path;
	};
});


siteApp.directive('gallery', ['GalleryService', function(GalleryService) {
	return {
		restrict: 'E',
		replace: true,
		controller: function($scope, Lightbox) {
			$scope.images = GalleryService.get();

			console.log($scope.images);

			$scope.openLightboxModal = function (index) {
				Lightbox.openModal($scope.images, index);
			};
		},
		templateUrl: 'views/partial/gallery/gallery.html'
	};
}]);
