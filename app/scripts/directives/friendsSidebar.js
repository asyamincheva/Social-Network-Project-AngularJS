'use strict';

mySquadSocialNetwork.directive('friendsSidebar', function () {
    return {
        templateUrl: 'partials/directives/friends-sidebar.html',
        restrict: 'A',
        controller: 'FriendsSidebarController'
    }
});