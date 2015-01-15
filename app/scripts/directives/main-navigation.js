/**
 * Created by Ivan_Moroz on 12/18/2014.
 */

siteApp.directive('mainNavigation', ['$compile', 'MainNavigation', function($compile, MainNavigation) {
	return {
		restrict: 'E',
		replace: true,
		controller: function($scope) {
			$scope.mainNavigationList = MainNavigation.get();
		},
		templateUrl: 'views/partial/main-navigation.html'
	};
}]);