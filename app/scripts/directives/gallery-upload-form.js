siteApp.directive('galleryUploadForm', function() {
	return {
		restrict: 'E',
		replace: true,
		controller: function($scope, $upload) {
		},
		templateUrl: 'views/partial/gallery-upload-form.html'
	};
});
