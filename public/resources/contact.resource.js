(function () {
    'use strict';

    angular.module('IBM_Exercise')
        .factory('Contacts', ContactResource);

    function ContactResource($resource) {
        return $resource('contacts/:contactId', {
            contactId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }

})();