(function () {
    'use strict';

    angular.module('patternfly.app')
        .factory('ApiHeaderSrvc', Service);

    Service.$inject = ['$base64'];

    function Service($base64) {
        var methods = {};

        var credentials = [
            {username: 'teiidUser', password: 'Redhat1!'},
            {username: 'adminUser', password: 'Redhat1!'}
        ];

        var selected = credentials[0];

        methods.getCredentials = function () {
            return credentials;
        };

        methods.selectUser = function (index) {
            selected = credentials[index];
        };

        methods.request = function (config) {
            config.headers = config.headers || {};
            config.headers.Authorization = 'Basic ' + $base64.encode(selected.username + ':' + selected.password)
            return config;
        };

        return methods;
    }
})();
