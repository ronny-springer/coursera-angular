(function () {

	'use strict';

	angular
		.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController)
		.filter('message', MessageFilter);

	LunchCheckController.$inject = ['$scope', 'messageFilter'];
	function LunchCheckController ($scope) {
		$scope.itemString = '';
		$scope.message = '';

		$scope.isEnoughFood = function () {
			var itemList = getItemList($scope.itemString);

			if (itemList.length === 0) {
				$scope.message = 'Please enter first data!';
				return ($scope.message);
			}

			if (itemList.length <= 3) {
				$scope.message = 'Enjoy!';
			} else {
				$scope.message = 'Too much!';
			}

			return (messageFilter($scope.message));
		}
	};

	function getItemList (itemString) {

		if (!itemString.length) {
			return ([]);
		} else {
			return (itemString.split(','));
		}
	}

	function MessageFilter () {
		return function (msg, target, replace) {
			return (msg.replace(target, replace));
		}
	}

})();