(function() {
    'use strict';

    angular.module('patternfly.app')
        .config(Router);

    Router.$inject = ['$stateProvider'];

    function Router($stateProvider) {

        $stateProvider
            .state({
                name: 'map',
                url:'/map',
                component: 'appMap',
                ncyBreadcrumb: {
                    label: 'Park Map',
                    parent: 'home'
                }
            });

    }
})();

