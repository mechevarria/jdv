(function () {
    'use strict';

    angular.module('patternfly.app')
        .factory('MapSrvc', Service);

    Service.$inject = ['$http'];

    function Service($http) {

        var methods = {};

        methods.get = function (page, pageSize) {
            var offset = ( page - 1 ) * pageSize;

            return $http.get('/odata4/POI_VDB/fed_schema/fed_table', {
                params: {
                    '$top': pageSize,
                    '$skip': offset,
                    '$count': 'true'
                }
            });
        };

        return methods;
    }
})();
