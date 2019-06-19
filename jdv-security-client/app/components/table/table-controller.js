(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('TableCtrl', Controller);

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
            {header: 'Row', itemField: 'ROW_ID'},
            {header: 'ID', itemField: 'Person_ID'},
            {header: 'First', itemField: 'First_Name'},
            {header: 'Last', itemField: 'Last_Name'},
            {header: 'Email', itemField: 'Email_Address'},
            {header: 'SSN', itemField: 'SSN'},
            {header: 'DOB', itemField: 'DateOfBirth'},
            {header: 'Address 1', itemField: 'Address_1'},
            {header: 'Address 2', itemField: 'Address_2'},
            {header: 'City', itemField: 'City'},
            {header: 'State', itemField: 'State'},
            {header: 'Zipe', itemField: 'ZipCode'},
            {header: 'Phone', itemField: 'Phone'}
        ];

        $ctrl.config = {
            selectionMatchProp: 'ROW_ID',
            itemsAvailable: true,
            showCheckboxes: false
        };

        $ctrl.load = function() {

            TableSrvc.getView($ctrl.selectedUser)
                .then(function(resp){
                    $ctrl.items = resp.data.value;
                    NotifySrvc.success('Successfully loaded Excel data for ' + $ctrl.selectedUser);
                })
                .catch(function(resp){
                    NotifySrvc.error(resp.data.error.code + ' : ' + resp.data.error.message);
                });
        };

    }
})();
