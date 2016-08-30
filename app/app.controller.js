angular.module('firstCtrl', []).controller('CalculatorController', function CalculatorController($scope) {
	$scope.message = "hello World"
    $scope.sum = function() {
          $scope.z = $scope.x + $scope.y;
  };
});
