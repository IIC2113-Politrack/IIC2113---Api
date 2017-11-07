'use strict';

var mongoose = require('mongoose'),
  Politician = require('../models/politicianModel');

exports.listAllPoliticians = function (req, res) {
  Politician
    .find({}, function (err, politician) {
      if (err)
        res.send(err);
      res.json(politician);
    });
};

exports.createPolitician = function (req, res) {
  var new_politician = new Politician(req.body);
  new_politician.save(function (err, politician) {
    if (err)
      res.send(err);
    res.json(politician);
  });
};

exports.addProposal = function (req, res) {
  Politician
    .findById(req.params.politicianId, function (err, politician) {
      if (err) {
        res.send(err);
      }
      res.json(politician.addProposal(req.body.proposalId));
    })
};

exports.readPolitician = function (req, res) {
  Politician
    .findById(req.params.politicianId)
    .populate('proposals.proposal')
    .populate('proposals.evidences')
    .exec(function (err, politician) {
      if (err)
        res.send(err);
      res.json(politician);
    });
};

exports.updatePolitician = function (req, res) {
  Politician
    .findOneAndUpdate({
      _id: req.params.politicianId
    }, req.body, {
      new: true
    }, function (err, politician) {
      if (err)
        res.send(err);
      res.json(politician);
    });
};

exports.deletePolitician = function (req, res) {

  Politician
    .remove({
      _id: req.params.politicianId
    }, function (err, politician) {
      if (err)
        res.send(err);
      res.json({
        message: 'Politician successfully deleted'
      });
    });
};