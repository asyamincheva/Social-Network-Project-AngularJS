'use strict';

mySquadSocialNetwork.directive('editPost', function () {
    return {
        templateUrl: 'partials/directives/edit-post.html',
        restrict: 'A',
        controller: 'EditPostController'
    }
});