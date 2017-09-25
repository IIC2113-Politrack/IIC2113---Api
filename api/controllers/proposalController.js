'use strict';

var mongoose = require('mongoose'),
    Proposal = require('../models/proposalModel');

exports.list_all_proposals = function (req, res) {
    Proposal
        .find({}, function (err, proposal) {
            if (err) 
                res.send(err);
            res.json(proposal);
        });
};

exports.create_a_proposal = function (req, res) {
    var new_proposal = new Proposal(req.body);
    new_proposal.save(function (err, proposal) {
        if (err) 
            res.send(err);
        res.json(proposal);
    });
};

exports.read_a_proposal = function (req, res) {
    Proposal
        .findById(req.params.proposalId, function (err, proposal) {
            if (err) 
                res.send(err);
            res.json(proposal);
        });
};

exports.update_a_proposal = function (req, res) {
    Proposal
        .findOneAndUpdate({
            _id: req.params.proposalId
        }, req.body, {
            new: true
        }, function (err, proposal) {
            if (err) 
                res.send(err);
            res.json(proposal);
        });
};

exports.delete_a_proposal = function (req, res) {

    Proposal
        .remove({
            _id: req.params.proposalId
        }, function (err, proposal) {
            if (err) 
                res.send(err);
            res.json({message: 'Proposal successfully deleted'});
        });
};