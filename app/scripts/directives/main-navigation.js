/**
 * Created by Ivan_Moroz on 12/18/2014.
 */

siteApp.directive('mainNavigation', ['$compile', 'MainNavigationData', function($compile, MainNavigationData) {
	return {
		restrict: 'E',
		replace: true,
		controller: function($scope) {
			$scope.mainNavigationList = MainNavigationData.get();
		},
		templateUrl: 'views/partial/main-navigation.html'
	};
}]);