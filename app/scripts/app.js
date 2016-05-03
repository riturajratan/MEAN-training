'use strict';
var MEAN=angular.module('MEAN', ['ui.router','ngResource']);

angular.module('MEAN').constant('CONSTANTS', {
        API_URL: '/api'
});

angular.module('MEAN').config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('/', {
      url: "",
      templateUrl: "views/partials/list.html",
      controller:'MEANCTRL'
    })
    .state('adduser', {
      url: "/add-user",
      templateUrl: "views/partials/add-user.html",
      controller:'MEANCTRL'

    })
    .state('edituser', {
      url: "/edit-user/:id",
      templateUrl: "views/partials/edit-user.html",
      controller:'MEANCTRL'
    });
    });
