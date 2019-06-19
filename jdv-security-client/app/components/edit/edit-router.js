(function() {
    'use strict';

    angular.module('patternfly.app')
        .config(Router);

    Router.$inject = ['$stateProvider'];

    function Router($stateProvider) {
        $stateProvider
            .state({
                name: 'edit',
                url:'/edit',
                component: 'appEdit',
                ncyBreadcrumb: {
                    label: 'Edited View',
                    parent: 'home'
                }
            });

    }
})();
