(function () {
    'use strict';

    angular
        .module('albumx')
        .controller('AlbumsController', AlbumsController);

    AlbumsController.$inject = ['AlbumList'];

    function AlbumsController(AlbumList) {
        this.list = AlbumList;
    }

})();
