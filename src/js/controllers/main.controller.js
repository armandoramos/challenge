(function () {
    'use strict';

    angular
        .module('albumx')
        .controller('MainController', MainController);
    
    MainController.$inject = ['$state', 'UserList'];

    function MainController($state, UserList) {
        this.users = UserList;

        this.ChooseUser = function (userId) {
            $state.go('app.user', {
                userId: userId
            });
        };
    }

})()
;