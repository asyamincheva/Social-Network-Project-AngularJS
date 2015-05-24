'use strict';

mySquadSocialNetwork.directive('editComment', function () {
    return {
        templateUrl: 'partials/directives/edit-comment.html',
        restrict: 'A',
        controller: 'EditCommentController'
    }
});