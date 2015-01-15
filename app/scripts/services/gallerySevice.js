/**
 * Created by Ivan_Moroz on 12/18/2014.
 */

siteApp.factory('Gallery', ['$resource',
	function($resource){
		return $resource('resources/main-gallery.json', {}, {
			get: {method:'GET', isArray:true}
		});
	}
]);
