(function () {
    'use strict';

    angular
        .module('albumx')
        .service('PromiseBuilder', PromiseBuilderService);

    PromiseBuilderService.$inject = ['$http', '$q'];

    function PromiseBuilderService($http, $q) {

        this.Get = function Get(url) {
            var defer = $q.defer();

            $http.get(url)
            .then(function (response) {
                defer.resolve(response.data);
            })
            .catch(function (response) {
                defer.reject(response);
            });

            return defer.promise;
        }
    }

})();
