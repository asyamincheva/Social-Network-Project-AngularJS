'use strict';

mySquadSocialNetwork.directive('usersSearchResults', function () {
    return {
        templateUrl: 'partials/directives/users-search-results.html',
        restrict: 'A',
        controller: 'UserHeaderController'
    }
});