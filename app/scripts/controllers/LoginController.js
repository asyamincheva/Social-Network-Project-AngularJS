'use strict';

mySquadSocialNetwork.controller('LoginController',
    ['$scope', '$route','$location', '$timeout', 'userData', 'credentials', 'toaster',
        function ($scope, $route, $location, $timeout, userData, credentials, toaster) {
            $scope.rememberMe = false;
            $scope.login = login;

            function login(user, loginForm) {
                userData.login(user)
                    .$promise
                    .then(function (data) {
                        $scope.user = {};

                        if ($scope.rememberMe) {
                            $scope.$storage = credentials.saveTokenInLocalStorage(data.access_token, data.token_type);
                        } else {
                            $scope.$storage = credentials.saveTokenInSessionStorage(data.access_token, data.token_type);
                        }

                        userData.getLoggedUserData()
                            .$promise
                            .then(function (data) {
                                credentials.saveLoggedUser(data);
                                toaster.pop('success', 'Login successful!');
                                $location.path('/home');
                            }, function (error) {
                                toaster.pop('error', 'Login error!', error.data.message);
                                credentials.deleteCredentials();
                                $route.reload();
                            });
                    }, function (error) {
                        toaster.pop('error', 'Login unsuccessful!', error.data.message);
                    });
            }
            function reloadRoute(time) {
                $timeout(function () {
                    $route.reload();
                }, time);
            }
        }
    ]);