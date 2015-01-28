/**
 * Created by Ivan_Moroz on 12/18/2014.
 */

siteApp.factory('GalleryService', ['$resource',
	function($resource){
		return $resource('/api/galleryItems/:id', {id: '@_id'}, {
			get: {method:'GET', isArray:true}
		});
	}
]);
