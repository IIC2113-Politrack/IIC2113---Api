'use strict'

let mongoose = require('mongoose'),
  Evidence = require('../models/evidenceModel'),
  Politician = require('../models/politicianModel')

exports.readEvidence = function (req, res) {
  Evidence
    .findById(req.params.evidenceId, function (err, evidence) {
      if (err) {
        res.send(err)
      } else if (!evidence) {
        res.status(204).send()
      } else {
        res.json(evidence)
      }
    })
}

exports.updateEvidence = function (req, res) {
  Evidence
    .findOneAndUpdate({
      _id: req.params.evidenceId
    }, req.body, {
      new: true
    }, function (err, evidence) {
      if (err) {
        res.send(err)
      } else if (!evidence) {
        res.status(204).send()
      } else {
        res.json(evidence)
      }
    })
}

exports.deleteEvidence = function (req, res) {

  Evidence
    .findOneAndRemove({
      _id: req.params.evidenceId
    }, function (err, evidence) {
      if (err) {
        res.send(err)
      } else if (!evidence) {
        res.status(204).send()
      } else {
        res.json({
          message: 'Evidence successfully deleted'
        })
      }
    })
}