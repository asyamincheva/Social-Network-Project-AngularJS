'use strict';

mySquadSocialNetwork.controller('RegisterController',
    ['$scope', '$route','$location', '$timeout', 'userData', 'credentials', 'toaster',
        function ($scope, $route, $location, $timeout, userData, credentials, toaster) {
        $scope.register = register;

        function register(user, registerForm) {
            userData.register(user)
                .$promise
                .then(function (data) {
                    credentials.saveLoggedUser(user);
                    credentials.saveTokenInSessionStorage(data.access_token, data.token_type);
                    toaster.pop('success', 'Register successful!');
                    $location.path('/');
                }, function (error) {
                    toaster.pop('error', 'Registration error!', error.data.message);
                })
        }

        function reloadRoute(time) {
            $timeout(function () {
                $route.reload();
            }, time);
        }
    }
    ]);