(function() {
    'use strict';

    angular.module('patternfly.app')
        .config(Router);

    Router.$inject = ['$stateProvider'];

    function Router($stateProvider) {

        $stateProvider
            .state({
                name: 'cars',
                url:'/cars',
                component: 'appCars',
                ncyBreadcrumb: {
                    label: 'Cars',
                    parent: 'home'
                }
            });

    }
})();
