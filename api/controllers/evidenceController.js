'use strict'

var mongoose = require('mongoose'),
  Evidence = require('../models/evidenceModel'),
  Politician = require('../models/politicianModel')

exports.readEvidence = function (req, res) {
  Evidence
    .findById(req.params.evidenceId, function (err, evidence) {
      if (err) 
        res.send(err)
      res.json(evidence)
    })
}

exports.updateEvidence = function (req, res) {
  Evidence
    .findOneAndUpdate({
      _id: req.params.evidenceId
    }, req.body, {
      new: true
    }, function (err, evidence) {
      if (err) 
        res.send(err)
      res.json(evidence)
    })
}

exports.deleteEvidence = function (req, res) {

  Evidence
    .remove({
      _id: req.params.evidenceId
    }, function (err, evidence) {
      if (err) 
        res.send(err)
      res.json({message: 'Evidence successfully deleted'})
    })
}