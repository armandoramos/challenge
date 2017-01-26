(function () {
    'use strict';

    angular
        .module('albumx')
        .config(AppConfig);
    
    AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function AppConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/ng/select');

        var base = {
            name: 'app',
            url:'/ng',
            templateUrl: 'templates/home.html',
            resolve: {
                UserList: ['Users', function(Users) {
                    return Users.GetAll();
                }]
            },
            controller: 'MainController as main'
        }

        var select = {
            name: 'app.select',
            url: '/select',
            template: 'Select a user to view their albums'
        }

        var albums = {
            name: 'app.user',
            url: '/user/{userId}',
            templateUrl: 'templates/album-list.html',
            resolve: {
                AlbumList: ['Albums', '$stateParams', function(Albums, $stateParams) {
                    return Albums.GetAlbumsByUserId($stateParams.userId);
                }]
            },
            controller: 'AlbumsController as albums'
        }

        $stateProvider
            .state(base)
            .state(select)
            .state(albums);
    }

})();
