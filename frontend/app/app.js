'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.kids',
    'myApp.updates',
    'myApp.newKid',
    'myApp.version',
    'restangular'
]).
    config(['$routeProvider', 'RestangularProvider', function ($routeProvider, RestangularProvider) {
        $routeProvider.otherwise({redirectTo: '/kids'});

        RestangularProvider.setBaseUrl('http://localhost:8081');
    }]);
