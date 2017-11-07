'use strict';

var mongoose = require('mongoose'),
  Evidence = require('../models/evidenceModel'),
  Politician = require('../models/politicianModel');

exports.listAllEvidences = function (req, res) {
  Evidence
    .find({}, function (err, evidence) {
      if (err)
        res.send(err);
      res.json(evidence);
    });
};

exports.createEvidence = function (req, res) {
  var newEvidence = new Evidence(req.body.data);
  // find de politico
  // find de la propuesta
  newEvidence.save(function (err, evidence) {
    if (err)
      console.log(err)
    Politician
      .findById(req.body.politicianId, function (err, politician) {
        politician.addEvidence(evidence._id, req.body.proposalId)
          .then(res.json(evidence))
          .catch((err) => console.log((err)));
      })
  });
};

exports.readEvidence = function (req, res) {
  Evidence
    .findById(req.params.evidenceId, function (err, evidence) {
      if (err)
        res.send(err);
      res.json(evidence);
    });
};

exports.updateEvidence = function (req, res) {
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

exports.deleteEvidence = function (req, res) {

  Evidence
    .remove({
      _id: req.params.evidenceId
    }, function (err, evidence) {
      if (err)
        res.send(err);
      res.json({
        message: 'Evidence successfully deleted'
      });
    });
};