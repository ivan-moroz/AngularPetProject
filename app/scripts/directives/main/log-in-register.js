/**
 * Created by Ivan_Moroz on 12/18/2014.
 */

siteApp.directive('logInRegister', function() {
	return {
		restrict: 'E',
		replace: true,
		controller: function($scope) {

		},
		templateUrl: 'views/partial/main/log-in-register.html'
	};
});