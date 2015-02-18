/**
 * Created by Ivan_Moroz on 12/18/2014.
 */

siteApp.controller('registerController', function($scope, $http) {
	$scope.user = {};
	$scope.register = function(user){
		var config = {
			params: {
				user: user
			}
		};

		$http.post("api/register", null, config)
		.success(function (data, status, headers, config) {
			$scope.result = data;
		})
		.error(function (data, status, headers, config) {
			$scope.result = "SUBMIT ERROR";
		});
	}
});
