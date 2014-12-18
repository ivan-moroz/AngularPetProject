/**
 * Created by Ivan_Moroz on 12/18/2014.
 */

siteApp.factory('MainNavigationData', ['$resource',
	function($resource){
		return $resource('resources/main-navigation.json', {}, {
			get: {method:'GET', isArray:true}
		});
	}
]);
