'use strict';

var app = angular.module('SMSChannel');

app.controller('AppCtrl', ['$scope', 'CurrentUser', function ($scope, CurrentUser) {

  console.log('Application controller loaded..');

  $scope.CurrentUser = CurrentUser;

}]);