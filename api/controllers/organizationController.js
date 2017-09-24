'use strict';

var mongoose = require('mongoose'),
    Organization = require('../models/organizationModel');

exports.list_all_organizations = function (req, res) {
    Organization
        .find({}, function (err, organization) {
            if (err) 
                res.send(err);
            res.json(organization);
        });
};

exports.create_a_organization = function (req, res) {
    var new_organization = new Organization(req.body);
    new_organization.save(function (err, organization) {
        if (err) 
            res.send(err);
        res.json(organization);
    });
};

exports.read_a_organization = function (req, res) {
    Organization
        .findById(req.params.organizationId, function (err, organization) {
            if (err) 
                res.send(err);
            res.json(organization);
        });
};

exports.update_a_organization = function (req, res) {
    Organization
        .findOneAndUpdate({
            _id: req.params.organizationId
        }, req.body, {
            new: true
        }, function (err, organization) {
            if (err) 
                res.send(err);
            res.json(organization);
        });
};

exports.delete_a_organization = function (req, res) {

    Organization
        .remove({
            _id: req.params.organizationId
        }, function (err, organization) {
            if (err) 
                res.send(err);
            res.json({message: 'Organization successfully deleted'});
        });
};