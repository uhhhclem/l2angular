describe('calculator', function () {

  beforeEach(module('firstCtrl'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('sum', function () {
		it('1 + 1 should equal 2', function () {
			var $scope = {};
			var controller = $controller('CalculatorController', { $scope: $scope });
			$scope.x = 1;
			$scope.y = 2;
			$scope.sum();
			expect($scope.z).toBe(3);
		});	
	});
  describe('message',function() {
  	it("Checking basic hello World functionality", function(){
  		var $scope     = {};
  		var controller =  $controller('CalculatorController', { $scope: $scope });
  	 	expect($scope.message).toBe("hello World");
  	});
  });	

});
