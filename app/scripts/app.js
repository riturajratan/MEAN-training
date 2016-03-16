'use strict';
var MEAN=angular.module('MEAN',[]);


angular.module('MEAN')
.controller('MEANCTRL',['$scope','$http',function($scope,$http){
	$http({
	  method: 'GET',
	  url: '/api/users'
	}).then(function successCallback(response) {
	    // this callback will be called asynchronously
	    // when the response is available
	    $scope.users=response.data.users;
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
	
}]);