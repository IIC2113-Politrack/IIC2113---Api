'use strict'

let mongoose = require('mongoose'),
  Commitment = require('../models/commitmentModel'),
  Evidence = require('../models/evidenceModel'),
  mt = require('moment-timezone')

exports.listAllCommitments = function (req, res) {
  Commitment
    .find({}, function (err, commitments) {
      if (err) {
        res.send(err)
      } else {
        res.json(commitments)
      }
    }).select('-id -__v -createdAt -updatedAt')
}

exports.readCommitment = function (req, res) {
  Commitment
    .findById(req.params.commitmentId)
    .select('-id -__v -createdAt -updatedAt')
    .populate('proposal', '-id -__v -createdAt -updatedAt')
    .exec(function (err, commitment) {
      if (err) {
        res.send(err)
      } else if (!commitment) {
        res.status(204).send()
      } else {
        res.json(commitment)
      }
    })
}

exports.deleteCommitment = function (req, res) {
  Commitment
    .findOneAndRemove({
      _id: req.params.commitmentId
    }, function (err, commitment) {
      if (err) {
        res.send(err)
      } else if (!commitment) {
        res.status(204).send()
      } else {
        res.json({
          message: 'Commitment successfully deleted'
        })
      }
    })
}

exports.getCommitmentEvidences = function (req, res) {
  Commitment
    .findById(req.params.commitmentId)
    .populate('evidences', '-__v -createdAt -updatedAt')
    .exec(function (err, commitment) {
      if (err) {
        res.send(err)
      } else if (!commitment) {
        res.status(204).send()
      } else {
        res.json(commitment.evidences)
      }
    })
}

exports.addEvidenceToCommitment = function (req, res) {
  Commitment
    .findById(req.params.commitmentId, function (err, commitment) {
      if (err) {
        res.send(err)
      } else if (!commitment) {
        res.status(204).send()
      } else {
        let newEvidence = new Evidence(req.body)
        newEvidence.save(function (err, evidence) {
          if (err) {
            res.send(err)
          } else {
            commitment
              .evidences
              .push(evidence._id)
            commitment.save(function (err, updatedCommitment) {
              if (err) {
                res.send(err)
              } else {
                res.json(evidence)
              }
            })
          }
        })
      }
    })
}