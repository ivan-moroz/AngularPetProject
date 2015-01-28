/**
 * Created by Ivan_Moroz on 12/18/2014.
 */

siteApp.factory('MainSlider', ['$resource',
	function($resource){
		return $resource('/api/mainSliderItems/:id', {id: '@_id'}, {
			get: {method:'GET', isArray:true}
		});
	}
]);
