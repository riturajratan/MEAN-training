'use strict';
var MEAN=angular.module('MEAN',[]);


angular.module('MEAN')
.controller('MEANCTRL',['$scope',function($scope){

$scope.users=[{'name':'R.R.R','lastname':'TEST'},{'name':'BEST','lastname':'GUEST'}];

}]);