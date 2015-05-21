'use strict';

mySquadSocialNetwork.controller('HomeController',
    ['$scope', 'credentials', function ($scope, credentials) {
        $scope.isLogged = credentials.checkForSessionToken();
    }]);