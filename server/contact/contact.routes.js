'use strict';

var contact = require('../contact/contact.controller.js');

module.exports = function(app) {
    app.route('/contacts')
        .post(contact.create)
        .get(contact.read);

    app.route('/contacts/:contactId')
        .get(contact.show)
        .put(contact.update)
        .delete(contact.delete);

    app.param('contactId', contact.contact);
};