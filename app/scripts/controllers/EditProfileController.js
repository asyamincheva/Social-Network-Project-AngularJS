'use strict';

mySquadSocialNetwork.controller('EditProfileController',
    ['$scope', '$location', '$timeout', 'userData', 'credentials', 'toaster', function ($scope, $location, $timeout, userData, credentials, toaster){
        $scope.editUser = credentials.getLoggedUser();
        $scope.editProfile = editProfile;

        function editProfile(user, editProfileForm) {
            userData.edit(user)
                .$promise
                .then(function (data) {
                    $scope.editProfileForm.$setPristine();
                    toaster.pop('success', 'Edit successful!', data.message);
                    $location.path('/home');
                }, function (error) {
                    toaster.pop('error', 'Edit profile error!', error.data.message);
                })
        }

        $scope.uploadProfileImage = function (files) {
			var file = files[0];
			var reader;

			if(!file.type.match(/image\/.*/)) {
				$('#profile-image').attr('src', '');

				$scope.editUser.profileImageData = undefined;
			} else if(file.size > 131072) {
				$('#profile-image').attr('src', '');

				$scope.editUser.profileImageData = undefined;
			} else {
				reader = new FileReader();
				reader.onload = function() {
					$('#profile-image').attr('src', reader.result);
					$scope.editUser.profileImageData = reader.result;
				};
				reader.readAsDataURL(file);
			}
		};

        $scope.uploadCoverImage = function (files) {
			var file = files[0];
			var reader;

			if(!file.type.match(/image\/.*/)) {
				$('#cover-image').attr('src', '');

				$scope.editUser.coverImageData = undefined;
			} else if(file.size > 131072) {
				$('#cover-image').attr('src', '');

				$scope.editUser.coverImageData = undefined;
			} else {
				reader = new FileReader();
				reader.onload = function() {
					$('#cover-image').attr('src', reader.result);
					$scope.editUser.coverImageData = reader.result;
				};
				reader.readAsDataURL(file);
			}
		};

        function redirectToHome(time) {
            $timeout(function () {
                $location.path('/');
            }, time);
        }
    }
    ]);