/**
 * Created by Ivan_Moroz on 12/18/2014.
 */

siteApp.controller('galleryController', function($scope, Lightbox) {
	$scope.openLightboxModal = function (index) {
		Lightbox.openModal($scope.images, index);
	};
});
