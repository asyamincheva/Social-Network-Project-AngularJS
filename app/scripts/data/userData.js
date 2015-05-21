'use strict';

mySquadSocialNetwork.factory('userData', ['$resource', 'baseUrl', 'credentials', function ($resource, baseUrl, credentials) {
    function loginUser(user) {
        return $resource(baseUrl + 'users/login')
            .save(user);
    }

    function registerUser(user) {
        return $resource(baseUrl + 'users/register')
            .save(user);
    }

    function getLoggedUserData() {
        var authorization = credentials.getAuthorization();
        return $resource(
            baseUrl + 'me',
            null,
            {
                'get': {
                    method: 'GET',
                    headers: {'Authorization': authorization}
                }
            })
            .get();
    }

    return {
        login: loginUser,
        register: registerUser,
        getLoggedUserData: getLoggedUserData
    }
}]);
