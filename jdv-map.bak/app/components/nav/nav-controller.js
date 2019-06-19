(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('NavCtrl', Controller);

    Controller.$inject = ['$rootScope', 'NotifySrvc', 'ApiHeaderSrvc'];

    function Controller($rootScope, NotifySrvc, ApiHeaderSrvc) {
        var $ctrl = this;

        $ctrl.navItems = [{
            title: "Park Map",
            iconClass: "fa fa-map",
            uiSref: "map"
        }, {
            title: "Cars",
            iconClass: "fa fa-car",
            uiSref: "cars"
        }];

        // Notifications
        $ctrl.notifications = NotifySrvc.data;
        $ctrl.menuItems = [];

        $ctrl.clear = function () {
            NotifySrvc.clear();
            refresh();
        };

        $ctrl.getClass = function (type) {
            switch (type) {
                case 'success':
                    return 'pficon-ok';
                case 'warning':
                    return 'pficon-warning-triangle-o';
                case 'danger':
                    return 'pficon-error-circle-o';
                default:
                    return 'pficon-info';
            }
        };

        $rootScope.$on('notification.new', function () {
            refresh();
        });

        function refresh() {
            $ctrl.menuItems = NotifySrvc.notifications;
            $ctrl.notifyCount = $ctrl.menuItems.length;
        }

        $ctrl.handleClose = function (data) {
            NotifySrvc.close(data);
        };

        // user dropdown menu
        $ctrl.credentials = ApiHeaderSrvc.getCredentials();

        $ctrl.changeUser = function(index) {
            ApiHeaderSrvc.selectUser(index);
            NotifySrvc.info('Changed user to ' + $ctrl.credentials[index].username);
        };

    }
})();
