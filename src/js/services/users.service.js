(function () {
    'use strict';

    angular
        .module("albumx")
        .service("Users", UsersService);

    UsersService.$inject = ['PromiseBuilder'];

    function UsersService(PromiseBuilder) {
        var users = this;

        users.GetAll = GetAll;
        users.GetUser = GetUser;

        ////////////////////////////////////////

        function GetAll() {
            return PromiseBuilder.Get('http://jsonplaceholder.typicode.com/users');
        }

        function GetUser(userId) {
            return PromiseBuilder.Get('http://jsonplaceholder.typicode.com/users/' + userId + '/');
        }
    }

})();
