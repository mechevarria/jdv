(function() {
    'use strict';

    angular.module('patternfly.app')
        .component('appMap', {
            templateUrl: 'app/components/map/map.html',
            controller: 'LeafletCtrl'
        });
})();
