'use strict';

mySquadSocialNetwork.controller('LogoutController',
    ['$scope', '$location', '$timeout', 'userData', 'credentials', 'toaster',
        function ($scope, $location, $timeout, userData, credentials, toaster){
        $scope.logoutUser = logoutUser;
        $scope.logoutUser();

        function logoutUser() {
            userData.logout()
                .$promise
                .then(function (data) {
                    credentials.deleteCredentials();
                    toaster.pop('success', 'Logout successful!');
                    $location.path('/');
                }, function (error) {
                    toaster.pop('error', 'Logout error!', error.data.message);
                    $location.path('/');
                })
        }

        function redirectToHome(time) {
            $timeout(function () {
                $location.path('/');
            }, time);
        }
    }
    ]);
