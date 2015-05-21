'use strict';

var mySquadSocialNetwork = angular
    .module('mySquadSocialNetwork', ['ngResource', 'ngRoute', 'ngStorage', 'toaster'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'HomeController'
            })
            .otherwise({
                redirectTo: '/'
            })
    })
    .constant('baseUrl', 'http://softuni-social-network.azurewebsites.net/api/');