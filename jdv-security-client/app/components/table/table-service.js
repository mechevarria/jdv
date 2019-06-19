(function () {
    'use strict';

    angular.module('patternfly.app')
        .factory('TableSrvc', Service);

    Service.$inject = ['$http', '$base64'];

    function Service($http, $base64) {

        var factory = {};

        function setAuth(user) {
            return {
                Authorization: 'Basic ' + $base64.encode(user + ':' + 'Redhat1!')
            }
        }

        factory.getViewEdit = function (user) {

            return $http.get('/odata4/excel/ExcelViewEdit/Sheet1', {
                headers: setAuth(user)
            });
        };

        factory.getView = function (user) {

            return $http.get('/odata4/excel/ExcelView/Sheet1', {
                headers: setAuth(user)
            });
        };

        return factory;
    }
})();

