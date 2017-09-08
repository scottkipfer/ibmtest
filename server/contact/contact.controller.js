'use strict';

var mongoose = require('mongoose');
var _ = require('lodash');
var Contact = mongoose.model('Contact');


var getErrorMessage = function (err) {
    var message = '';
    for (var errName in err.errors) {
        if (err.errors[errName].message) {
            message = err.errors[errName].message;
        }
    }
    return message;
};

// Load contact
exports.contact = function (req, res, next, id) {
    Contact.load(id, function (err, contact) {
        if (err) {
            return next(err);
        }
        if (!contact) {
            return next(new Error('Failed to get the contact ' + id));
        }
        req.contact = contact;
        next();
    });
};

// Create a new contact
exports.create = function (req, res) {
    var contact = new Contact(req.body);
    contact.save(function (err) {
        if (err) {
            var message = getErrorMessage(err);
            return res.status(500).json({
                error: message
            });
        }
        res.json(contact);
    });
};

// Read contacts
exports.read = function (req, res) {
    Contact.find(req.query).sort('date').exec(function (err, contacts) {
        if (err) {
            return res.status(500).json({
                error: 'There was an error getting the contacts'
            });
        }
        res.json(contacts);
    });
};

// Show a single contact
exports.show = function (req, res) {
    res.json(req.contact);
};

// Update a contact
exports.update = function (req, res) {
    var contact = req.contact;
    contact = _.extend(contact, req.body);

    contact.save(function (err) {
        if (err) {
            return res.status(500).json({
                error: 'Unable to update contact'
            });
        }
        res.json(contact);
    });
};

// Delete a contact
exports.delete = function (req, res) {
    var contact = req.contact;

    contact.remove(function (err) {
        if (err) {
            return res.status(500).json({
                error: 'Unable to remove contact'
            });
        }
        res.json(contact);
    });
};

