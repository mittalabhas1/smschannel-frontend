'use strict';

var app = angular
  .module('SMSChannel', [
    'ngCookies',
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'restangular',
    'SMSChannel.models',
    'SMSChannel.services',
    'SMSChannel.directives',
  ]);

var models = angular.module('SMSChannel.models', []);
var services = angular.module('SMSChannel.services', []);
var directives = angular.module('SMSChannel.directives', []);
