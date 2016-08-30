// create the module separately from the controller, and give it a more appropriate name
// You'll be instantiating it in HTML like this:
//
// <div ng-app="myApp">
var app = angular.module('myApp', []);

// create the controller function separately from adding it to the module:
var ctrl = function($scope) {
	$scope.message = "hello World"
	$scope.sum = function() {
        $scope.z = $scope.x + $scope.y;
};

// Now add the controller to the app.
app.controller('CalculatorController', ctrl);

// Protip:  minification will break the controller.  To keep minification from breaking your code, angular lets you provide 
// names of the injected services along with the constructor:
//
// app.controller('CalculatorController', ['$scope', ctrl]);
//
// You should always do this.
