siteApp.directive('galleryUploadForm', function() {
	return {
		restrict: 'E',
		replace: true,
		controller: function($scope, FileUploader, $resource) {
			$scope.uploader = new FileUploader({
				url: 'api/galleryUpload'
			});
//			$.ajax({
//				url: 'api/galleryItems',
//				type: "POST",
//				contentType: 'application/json',
//				processData: false,
//				data: JSON.stringify({
//					"thumbUrl": "http://placehold.it/1900x1080&text=Slide Three",
//					"url": "http://placehold.it/1900x1080&text=Slide Three"
//				}),
//				success: function(){
//					console.log('success');
//				},
//				error: function(){
//					console.log('error');
//				}
//			});

			var GalleryItemDB = $resource('/api/galleryItems/:id', { id: '@_id' });
			var new_gallery = new GalleryItemDB({
				"thumbUrl": "http://placehold.it/1900x1080&text=Slide Three",
				"url": "http://placehold.it/1900x1080&text=Slide Three"
			});
			new_gallery.$save(function(new_gallery) {
				console.log('Success gallery item - ', new_gallery);
			});


		},
		templateUrl: 'views/partial/gallery/gallery-upload-form.html'
	};
});
