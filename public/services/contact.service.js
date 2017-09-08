var app = angular.module('IBM_Exercise')
    .factory('contactService', function($q, Contacts) {
        var service = {};

        service.getAllContacts = function() {
            var d = $q.defer();
            Contacts.query({},function(contacts) {
                d.resolve(contacts.$promise);
            });
            return d.promise;
        };

        service.getSingleContact = function(id) {
            var d = $q.defer();
            Contacts.get({
                contactId:id
            },function(contact) {
                d.resolve(contact.$promise);
            });
            return d.promise;
        };

        service.addContact = function(contact) {
            var defer = $q.defer();
            var newContact = new Contacts(contact);
            newContact.$save(function(res){
                defer.resolve(res);
            }, function(err) {
                defer.reject(err.data.error);
            });
            return defer.promise;
        };

        service.updateContact = function(contact) {
            var defer = $q.defer();
            var contactToUpdate = new Contacts(contact);
            contactToUpdate.$update(function(contact){
                defer.resolve(contact);
            });
            return defer.promise;
        };

        service.removeContact = function(id){
            var d = $q.defer();
            Contacts.delete({
                contactId:id
            },function(contact) {
                d.resolve(contact.$promise);
            });
            return d.promise;
        };

        return service;
    });