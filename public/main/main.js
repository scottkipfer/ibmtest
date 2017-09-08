(function () {
    'use strict';

    angular.module('IBM_Exercise', [
        'ui.router',
        'ngMaterial',
        'ngResource',
        'md.data.table',
        'naturalSort',
        'startFromFilter'
    ]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $urlRouterProvider.otherwise('/');

            // Do not use Html 5 Mode
            $locationProvider.html5Mode({
                enabled: false
            });

        }]).controller('AppController', function (contactService) {
            var vm = this;

            // view variables
            vm.contact = {};
            vm.contactList = [];
            vm.query = {
                order: '-created',
                limit: 7,
                page: 1
            };
            vm.reverse = true;

            // view functions
            vm.addContact = addContact;
            vm.removeContact = removeContact;
            vm.onReorder = onReorder;
            vm.orderBy = orderBy;

            function addContact(form) {
                if (vm.contact) {
                    contactService.addContact(vm.contact).then(function () {
                        vm.contact = {};
                        getContacts();
                        resetForm(form);
                    });
                }
            }

            function removeContact(contact) {
                if (contact) {
                    contactService.removeContact(contact._id).then(function () {
                        getContacts();
                    });
                }
            }

            function orderBy(orderValue) {
                vm.reverse = (vm.order === orderValue) ? !vm.reverse : false;
                vm.order = orderValue;
            }

            function onReorder(data) {
                if (data[0] === "-") {
                    vm.reverse = true;
                } else {
                    vm.reverse = false;
                }
            }

            function getContacts() {
                vm.promise = contactService.getAllContacts().then(function (contacts) {
                    vm.contactList = contacts;
                });
            }

            function resetForm(form) {
                form.$setPristine();
                form.$setUntouched();
            }

            function init() {
                getContacts();
            }

            init();
    });

})();