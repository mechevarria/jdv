(function () {
    'use strict';

    angular.module('patternfly.app')
        .factory('CarsSrvc', Service);

    Service.$inject = ['$http'];

    function Service($http) {

        var methods = {};

        methods.get = function () {
            return $http.get('/odata4/POI_VDB/new_view/itemmodel', {
                params: {
                    '$count': 'true'
                }
            });
        };

        return methods;
    }
})();
