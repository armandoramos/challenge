(function () {
    'use strict';

    angular
        .module('albumx')
        .service('Albums', AlbumsService);

    AlbumsService.$inject = ['PromiseBuilder'];

    function AlbumsService(PromiseBuilder) {
        var albums = this;

        albums.GetAlbumsByUserId = GetAlbumsByUserId;

        /////////////////////////////////////////////////

        function GetAlbumsByUserId(userId) {
            return PromiseBuilder.Get('http://jsonplaceholder.typicode.com/albums?userId=' + userId)
        }
    }

})();
