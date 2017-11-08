'use strict'

var mongoose = require('mongoose'),
  Commitment = require('../models/commitmentModel'),
  Evidence = require('../models/evidenceModel')

exports.listAllCommitments = function (req, res) {
  Commitment
    .find({}, function (err, commitment) {
      if (err) 
        res.send(err)
      res.json(commitment)
    })
}

exports.readCommitment = function (req, res) {
  Commitment
    .findById(req.params.commitmentId)
    .populate('proposal')
    .exec(function (err, commitment) {
      if (err) 
        res.send(err)
      res.json(commitment)
    })
}

exports.deleteCommitment = function (req, res) {
  Commitment
    .remove({
      _id: req.params.commitmentId
    }, function (err, commitment) {
      if (err) 
        res.send(err)
      res.json({message: 'Commitment successfully deleted'})
    })
}

exports.getAllEvidences = function (req, res) {
  Commitment
    .findById(req.params.commitmentId)
    .populate('evidences')
    .exec(function (err, commitment) {
      if (err) 
        res.send(err)
      res.json(commitment.evidences)
    })
}

exports.addEvidence = function (req, res) {
  Commitment
    .findById(req.params.commitmentId, function (err, commitment) {
      if (err) {
        res.send(err)
      }
      let newEvidence = new Evidence(req.body)
      newEvidence.save(function (err, evidence) {
        if (err) 
          res.send(err)
        commitment
          .evidences
          .push(evidence._id)
        commitment.save(function (err, updatedCommitment) {
          res.json(evidence)
        })
      })
    })
}