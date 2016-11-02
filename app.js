(function () {

	'use strict';

	angular
		.module('myFirstApp', [])
		.controller('MyFirstController', function ($scope) {

			$scope.name = "Ronny";
			$scope.sayHello = function () {
				return "Hallo Cousera";
			};
		});

})();