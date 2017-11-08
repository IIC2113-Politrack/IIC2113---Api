'use strict'

var mongoose = require('mongoose'),
  Politician = require('../models/politicianModel'),
  Commitment = require('../models/commitmentModel')

exports.listAllPoliticians = function (req, res) {
  Politician
    .find({}, function (err, politicians) {
      if (err) {
        res.render('error', {});
      } else {
        res.json(politicians)
      }
    })
}

exports.createPolitician = function (req, res) {
  var new_politician = new Politician(req.body)
  new_politician.save(function (err, politician) {
    if (err) {
      res.send(err)
    } else {
      res.json(politician)
    }
  })
}

exports.readPolitician = function (req, res) {
  Politician
    .findById(req.params.politicianId)
    .populate('commitments')
    .exec(function (err, politician) {
      if (err) {
        res.send(err)
      } else if (!politician){
        res.status(204).send()
      } else {
        res.json(politician)
      }
    })
}

exports.updatePolitician = function (req, res) {
  Politician
    .findOneAndUpdate({
      _id: req.params.politicianId
    }, req.body, {
      new: true
    }, function (err, politician) {
      if (err) {
        res.send(err)
      } else if (!politician) {
        res.status(204).send()
      } else {
        res.json(politician)
      }
    })
}

exports.deletePolitician = function (req, res) {
  Politician
    .findOneAndRemove({
      _id: req.params.politicianId
    }, function (err, politician) {
      if (err) {
        res.send(err)
      } else if (!politician) {
        res.status(204).send()
      } else {
        res.json({
          message: 'Politician successfully deleted'
        })
      }
    })
}

exports.addCommitment = function (req, res) {
  Politician
    .findById(req.params.politicianId, function (err, politician) {
      if (err) {
        res.send(err)
      } else if (!politician) {
        res.status(204).send()
      } else {
        let commitment = new Commitment({
          politician: politician._id,
          proposal: req.body.proposalId,
          evidences: []
        })
        commitment.save(function (err, commitment) {
          if (err) {
            res.send(err)
          } else {
            politician
              .commitments
              .push(commitment._id)
            politician.save(function (err, updatedPolitician) {
              if (err) {
                res.send(err)
              } else {
                res.json(commitment)
              }
            })
          }
        })
      }
    })
}

exports.getPoliticianCommitments = function (req, res) {
  Politician
    .findById(req.params.politicianId, function (err, politician) {
      if (err || !politician) {
        res.send(err)
      } else {
        Commitment
          .find({
            politician: politician._id
          })
          .populate('proposal')
          .exec(function (err, commitments) {
            if (err) {
              res.send(err)
            } else {
              res.json(commitments)
            }
          })
      }
    })
}