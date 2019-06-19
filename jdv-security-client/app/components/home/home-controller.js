(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('HomeCtrl', Controller);

    function Controller() {
        var $ctrl = this;

        $ctrl.name = 'Home';

        $ctrl.config = {
            icon: 'fa fa-arrow-circle-left',
            title: 'JDV Security Client',
            info: 'Click one of the links on the left to see role based security applied to JBoss Data Virtualization Views.'
        };
    }
})();
