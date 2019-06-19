(function () {
    'use strict';

    angular.module('patternfly.app')
        .controller('LeafletCtrl', Controller);

    Controller.$inject = ['MapSrvc', '$base64', 'NotifySrvc'];

    function Controller(MapSrvc, $base64, NotifySrvc) {
        var $ctrl = this;

        $ctrl.focus = function (marker) {
            marker.focus = true;
            $ctrl.activeId = marker.id;
            $ctrl.center.lat = marker.lat;
            $ctrl.center.lng = marker.lng;
            $ctrl.details = marker;
        };

        function handleSuccess(res) {
            $ctrl.markers = [];

            $ctrl.totalItems = res.data['@odata.count'];

            // construct the markers for the map
            _.forEach(res.data.value, function (result) {
                var coordArray = result.coordinates.split(',');

                var marker = {
                    restBody: result.body,
                    restTitle: result.title,
                    rating: result.rating,
                    id: result.id,
                    state: result.state,
                    lng: parseFloat(coordArray[1]),
                    lat: parseFloat(coordArray[0]),
                    title: result.name,
                    message: result.description,
                    geoType: result.geoType,
                    type: result.type,
                    draggable: false,
                    org: result.org,
                    // GeoJSON was too long for String data and had to be encoded
                    feature: JSON.parse($base64.decode(result.geoCoordinates)),
                    abbreviation: result.abbreviation,
                    sid: result.sid

                };
                $ctrl.markers.push(marker);
            });

            // add geometry to map
            $ctrl.geoJson.data.features = _.map($ctrl.markers, function (marker) {
                return marker.feature;
            });

            if(_.isNil($ctrl.loaded)) {
                $ctrl.loaded = true;
                NotifySrvc.success('Loaded ' + $ctrl.totalItems + ' records');
            }

        }

        function handleError(error) {
            NotifySrvc.error(error);
            throw error;
        }

        $ctrl.loadData = function () {

            MapSrvc.get($ctrl.currentPage, $ctrl.pageSize)
                .then(handleSuccess)
                .catch(handleError);

        };

        $ctrl.highlight = function (value) {
            if ($ctrl.attribute === value) {
                $ctrl.attribute = '';
            } else {
                $ctrl.attribute = value;
            }
        };

        $ctrl.isHighlight = function (value) {
            return $ctrl.attribute === value;
        };

        $ctrl.$onInit = function () {

            $ctrl.currentPage = 1;
            $ctrl.pageSize = 8;

            $ctrl.center = {
                lat: 37,
                lng: -100,
                zoom: 5
            };

            $ctrl.geoJson = {
                data: {
                    type: 'FeatureCollection',
                    features: []
                },
                style: {
                    fillColor: '#008cba',
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.5
                }
            };

            $ctrl.loadData();
            $ctrl.attribute = '';
        };
    }
})();
