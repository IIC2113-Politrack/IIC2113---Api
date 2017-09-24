'use strict';

var mongoose = require('mongoose'),
    Evidence = require('../models/evidenceModel');

exports.list_all_evidences = function (req, res) {
    Evidence
        .find({}, function (err, evidence) {
            if (err) 
                res.send(err);
            res.json(evidence);
        });
};

exports.create_a_evidence = function (req, res) {
    var new_evidence = new Evidence(req.body);
    new_evidence.save(function (err, evidence) {
        if (err) 
            res.send(err);
        res.json(evidence);
    });
};

exports.read_a_evidence = function (req, res) {
    Evidence
        .findById(req.params.evidenceId, function (err, evidence) {
            if (err) 
                res.send(err);
            res.json(evidence);
        });
};

exports.update_a_evidence = function (req, res) {
    Evidence
        .findOneAndUpdate({
            _id: req.params.evidenceId
        }, req.body, {
            new: true
        }, function (err, evidence) {
            if (err) 
                res.send(err);
            res.json(evidence);
        });
};

exports.delete_a_evidence = function (req, res) {

    Evidence
        .remove({
            _id: req.params.evidenceId
        }, function (err, evidence) {
            if (err) 
                res.send(err);
            res.json({message: 'Evidence successfully deleted'});
        });
};