siteApp.directive('galleryUploadForm', function() {
	return {
		restrict: 'E',
		replace: true,
		controller: function($scope, FileUploader, $resource) {
			var uploader = $scope.uploader = new FileUploader({
				url: 'api/galleryUpload',
				method: 'POST'
			});

			var fileName;
			var uploadDir = 'd:/_TestProjects/AngularPetProject/src/photos/';

//			uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
//				console.info('onWhenAddingFileFailed', item, filter, options);
//			};
//			uploader.onAfterAddingFile = function(fileItem) {
//				console.info('onAfterAddingFile', fileItem);
//			};
//			uploader.onAfterAddingAll = function(addedFileItems) {
//				console.info('onAfterAddingAll', addedFileItems);
//			};
			uploader.onBeforeUploadItem = function(item) {
				console.info('onBeforeUploadItem', item);
			};
//			uploader.onProgressItem = function(fileItem, progress) {
//				console.info('onProgressItem', fileItem, progress);
//			};
//			uploader.onProgressAll = function(progress) {
//				console.info('onProgressAll', progress);
//			};
			uploader.onSuccessItem = function(fileItem, response, status, headers) {
				console.info('onSuccessItem', fileItem, response, status, headers);
			};
//			uploader.onErrorItem = function(fileItem, response, status, headers) {
//				console.info('onErrorItem', fileItem, response, status, headers);
//			};
//			uploader.onCancelItem = function(fileItem, response, status, headers) {
//				console.info('onCancelItem', fileItem, response, status, headers);
//			};
//			uploader.onCompleteItem = function(fileItem, response, status, headers) {
//				console.info('onCompleteItem', fileItem, response, status, headers);
//			};
//			uploader.onCompleteAll = function() {
//				console.info('onCompleteAll');
//			};


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

//			var GalleryItemDB = $resource('/api/galleryItems/:id', { id: '@_id' });
//			var new_gallery = new GalleryItemDB({
//				"thumbUrl": "http://placehold.it/1900x1080&text=Slide Three",
//				"url": "http://placehold.it/1900x1080&text=Slide Three"
//			});
//			new_gallery.$save(function(new_gallery) {
//				console.log('Success gallery item - ', new_gallery);
//			});


		},
		templateUrl: 'views/partial/gallery/gallery-upload-form.html'
	};
});
