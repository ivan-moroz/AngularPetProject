/**
 * Created by Ivan_Moroz on 12/18/2014.
 */

siteApp.factory('MainNavigation', ['$resource',
	function($resource){
		var separator = location.href.indexOf('?') === -1 ? '?' : '&';
		return $resource('resources/main-navigation.json'+separator+'noCache='+new Date().getTime(), {}, {
			get: {method:'GET', isArray:true, cache: false}
		});
	}
]);
