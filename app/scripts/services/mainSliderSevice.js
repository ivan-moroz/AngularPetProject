/**
 * Created by Ivan_Moroz on 12/18/2014.
 */

siteApp.factory('MainSliderData', ['$resource',
	function($resource){
		return $resource('resources/main-slider.json', {}, {
			get: {method:'GET', isArray:true}
		});
	}
]);
