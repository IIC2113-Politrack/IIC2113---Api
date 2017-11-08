'use strict'

var mongoose = require('mongoose'),
  Politician = require('../models/politicianModel'),
  Commitment = require('../models/commitmentModel')

exports.listAllPoliticians = function (req, res) {
  Politician
    .find({}, function (err, politician) {
      if (err) 
        res.send(err)
      res.json(politician)
    })
}

exports.createPolitician = function (req, res) {
  var new_politician = new Politician(req.body)
  new_politician.save(function (err, politician) {
    if (err) 
      res.send(err)
    res.json(politician)
  })
}

exports.readPolitician = function (req, res) {
  Politician
    .findById(req.params.politicianId)
    .populate('commitments')
    .exec(function (err, politician) {
      if (err) 
        res.send(err)
      res.json(politician)
    })
}

exports.updatePolitician = function (req, res) {
  Politician
    .findOneAndUpdate({
      _id: req.params.politicianId
    }, req.body, {
      new: true
    }, function (err, politician) {
      if (err) 
        res.send(err)
      res.json(politician)
    })
}

exports.deletePolitician = function (req, res) {
  Politician
    .remove({
      _id: req.params.politicianId
    }, function (err, politician) {
      if (err) 
        res.send(err)
      res.json({message: 'Politician successfully deleted'})
    })
}

exports.addCommitment = function (req, res) {
  Politician
    .findById(req.params.politicianId, function (err, politician) {
      if (err) {
        res.send(err)
      }
      let commitment = new Commitment({politician: politician._id, proposal: req.body.proposalId, evidences: []})
      commitment.save(function (err, commitment) {
        if (err) 
          res.send(err)
        politician
          .commitments
          .push(commitment._id)
        politician.save(function (err, updatedPolitician) {
          res.json(commitment)
        })
      })
    })
}

exports.getPoliticianCommitments = function (req, res) {
  Politician
    .findById(req.params.politicianId, function (err, politician) {
      if (err) {
        res.send(err)
      }
      Commitment
        .find({politician: politician._id})
        .populate('proposal')
        .exec(function (err, commitments) {
          if (err) {
            res.send(err)
          }
          res.json(commitments)
        })
    })
}

// exports.getCommitmentEvidences = function (req, res) {   Politician
// .findById(req.params.politicianId, function (err, politician) {       if
// (err) {         res.send(err)       }       Commitment         .findOne({
//       politician: politician._id,           proposal: req.params.proposalId
//       }, function (err, commitments) {           if (err) {
// res.send(err)           }           res.json(commitments)         })     }) }