'use strict';

var mongoose = require('mongoose'),
    Proposal = require('../models/proposalModel');

exports.listAllProposals = function (req, res) {
    Proposal
        .find({}, function (err, proposal) {
            if (err) 
                res.send(err);
            res.json(proposal);
        });
};

exports.createProposal = function (req, res) {
    var new_proposal = new Proposal(req.body);
    new_proposal.save(function (err, proposal) {
        if (err) 
            res.send(err);
        res.json(proposal);
    });
};

exports.readProposal = function (req, res) {
    Proposal
        .findById(req.params.proposalId, function (err, proposal) {
            if (err) 
                res.send(err);
            res.json(proposal);
        });
};

exports.updateProposal = function (req, res) {
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

exports.deleteProposal = function (req, res) {

    Proposal
        .remove({
            _id: req.params.proposalId
        }, function (err, proposal) {
            if (err) 
                res.send(err);
            res.json({message: 'Proposal successfully deleted'});
        });
};