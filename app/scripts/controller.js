'use strict';
angular.module('MEAN')
    .controller('MEANCTRL', ['$scope', 'Users', '$state', '$stateParams', function($scope, users, $state, $stateParams) {

        if (!$stateParams.id) {
            users.query(function(data) {
                $scope.users = data.users;
            }, function(err) {
                console.log(err);
            });
        } else {
            users.get({ id: $stateParams.id }, function(data) {
                $scope.firstname = data.firstname;
                $scope.lastname = data.lastname;
                $scope.id = data._id;
            }, function(err) {
                console.log(err);
            });

        }


        $scope.addUser = function() {
            var addUser = {
                firstname: $scope.firstname,
                lastname: $scope.lastname
            };
            users.save(addUser, function(data) {
                $state.go("/");
            }, function(err) {
                console.log(err);
            });

        };

        $scope.editUser = function() {
            var addUser = {
                firstname: $scope.firstname,
                lastname: $scope.lastname
            };
            users.update({ id: $scope.id }, addUser, function(data) {
                $state.go("/");
            }, function(err) {
                console.log(err);
            });

        };

        $scope.deleteUser = function(id) {
            users.delete({ id:id }, function(data) {
                users.query(function(data) {
                    $scope.users = data.users;
                }, function(err) {
                    console.log(err);
                });

            }, function(err) {
                console.log(err);
            });

        };


    }]);
