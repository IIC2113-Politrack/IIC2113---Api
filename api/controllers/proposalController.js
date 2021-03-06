'use strict'

let mongoose = require('mongoose'),
  Proposal = require('../models/proposalModel')

exports.listAllProposals = function (req, res) {
  Proposal
    .find({}, function (err, proposals) {
      if (err) {
        res.send(err)
      } else {
        res.json(proposals)
      }
    })
}

exports.createProposal = function (req, res) {
  let new_proposal = new Proposal(req.body)
  new_proposal.save(function (err, proposal) {
    if (err) {
      res.send(err)
    } else {
      res.json(proposal)
    }
  })
}

exports.readProposal = function (req, res) {
  Proposal
    .findById(req.params.proposalId, function (err, proposal) {
      if (err) {
        res.send(err)
      } else if (!proposal) {
        res.status(204).send()
      } else {
        res.json(proposal)
      }
    })
}

exports.updateProposal = function (req, res) {
  Proposal
    .findOneAndUpdate({
      _id: req.params.proposalId
    }, req.body, {
      new: true
    }, function (err, proposal) {
      if (err) {
        res.send(err)
      } else if (!proposal) {
        res.status(204).send()
      } else {
        res.json(proposal)
      }
    })
}

exports.deleteProposal = function (req, res) {
  Proposal
    .findOneAndRemove({
      _id: req.params.proposalId
    }, function (err, proposal) {
      if (err) {
        res.send(err)
      } else if (!proposal) {
        res.status(204).send()
      } else {
        res.json({
          message: 'Proposal successfully deleted'
        })
      }
    })
}