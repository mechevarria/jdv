(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('CarsCtrl', Controller);

    Controller.$inject = ['CarsSrvc', 'NotifySrvc'];

    function Controller(CarsSrvc, NotifySrvc) {
        var $ctrl = this;

        $ctrl.name = 'Cars';

        $ctrl.items = [];

        $ctrl.pageConfig = {
            pageNumber: 1,
            pageSize: 10,
            pageSizeIncrements: [5, 10, 20]
        };

        $ctrl.columns = [
            {header: 'ID', itemField: 'id'},
            {header: 'Make', itemField: 'make'},
            {header: 'Model', itemField: 'model'},
            {header: 'Year', itemField: 'year'},
            {header: 'Created', itemField: 'createdate'},
            {header: 'Update', itemField: 'lastupdatedate'},
            {header: 'Status', itemField: 'status'}
        ];

        $ctrl.config = {
            selectionMatchProp: 'id',
            itemsAvailable: true,
            showCheckboxes: false
        };

        function handleError(error) {
            NotifySrvc.error(error);
            throw error;
        }

        function handleSuccess(res) {
            $ctrl.items = res.data.value;
            $ctrl.count = res.data['@odata.count'];

            NotifySrvc.success('Loaded ' + $ctrl.count + ' records');
        }

        $ctrl.$onInit = function () {
            CarsSrvc.get()
                .then(handleSuccess)
                .catch(handleError);
        };

    }
})();
