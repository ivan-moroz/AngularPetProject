/**
 * Created by Ivan_Moroz on 12/18/2014.
 */

siteApp.controller('logInController', function($scope, $http) {
	$scope.user = {};
	$scope.logIn = function(user){
		console.log(user);
		var config = {
			params: {
				user: user
			}
		};

		$http.post("api/authenticate", null, config)
			.success(function (data, status, headers, config) {
			$scope.result = data;
			console.log($scope.result);
		})
		.error(function (data, status, headers, config)
		{
			$scope.result = "SUBMIT ERROR";
		});
	}
});
