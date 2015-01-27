/**
 * Created by Ivan_Moroz on 12/22/2014.
 */
//Fix bug for bootstrap
angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition'])
	.controller('CarouselController', ['$scope', '$timeout', '$transition', '$q', function ($scope, $timeout, $transition, $q) {
	}]).directive('carousel', [function() {
		return {}
	}]
);

siteApp.directive('mainSlider', ['$compile', 'MainSlider', function($compile, MainSlider) {
	return {
		restrict: 'E',
		replace: true,
		controller: function($scope) {
			$scope.mainSliderList = MainSlider.get();


			$('.carousel').carousel({
				interval: 5000 //changes the speed
			});

			$('.carousel-control.left').click(function(e) {
				e.preventDefault();
				$('#myCarousel').carousel('prev');
			});

			$('.carousel-control.right').click(function(e) {
				e.preventDefault();
				$('#myCarousel').carousel('next');
			});
		},
		templateUrl: '../../../views/partial/main-slider.html'
	};
}]);
