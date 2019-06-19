(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('EditCtrl', Controller);

    Controller.$inject = ['NotifySrvc', 'TableSrvc'];

    function Controller(NotifySrvc, TableSrvc) {
        var $ctrl = this;

        $ctrl.items = [];
        $ctrl.users = ['teiidUser','powerUser','adminUser'];
        $ctrl.selectedUser = $ctrl.users[0];

        $ctrl.dtOptions = {
            paginationType: 'full',
            displayLength: 20,
            dom: 'irtp'
        };

        $ctrl.columns = [
            {header: 'ID', itemField: 'ROW_ID'},
            {header: 'Name', itemField: 'Name'},
            {header: 'State', itemField: 'State'},
            {header: 'Email', itemField: 'Email_Address'},
            {header: 'Phone', itemField: 'Phone'},
            {header: 'UUID', itemField: 'uuid'}
        ];

        $ctrl.config = {
            selectionMatchProp: 'ROW_ID',
            itemsAvailable: true,
            showCheckboxes: false
        };

        $ctrl.load = function() {

            TableSrvc.getViewEdit($ctrl.selectedUser)
                .then(function(resp){
                    $ctrl.items = resp.data.value;
                    NotifySrvc.success('Successfully loaded edited data for ' + $ctrl.selectedUser);
                })
                .catch(function(){
                    NotifySrvc.error('Failed to retrieve edited data');
                });
        };
    }
})();
