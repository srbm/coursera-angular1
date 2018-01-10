(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.input = "";
  $scope.tooMuch = "Too Much!";
  $scope.enjoy = "Enjoy";
  $scope.noData = "Please enter data first";
  $scope.msg = "Test Msg";
  $scope.checkFood = function() {
    if ($scope.input.split(',').length == 0) {
      return $scope.msg = $scope.noData;
    } else if ($scope.input.split(',').length < 4) {
      return $scope.msg = $scope.enjoy;
    } else {
      return $scope.msg = $scope.tooMuch;
    }
  }
}

})();
