'use strict'

let mongoose = require('mongoose'),
  Organization = require('../models/organizationModel')

exports.listAllOrganizations = function (req, res) {
  Organization
    .find({}, function (err, organizations) {
      if (err) {
        res.send(err)
      } else {
        res.json(organizations)
      }
    })
}

exports.createOrganization = function (req, res) {
  let new_organization = new Organization(req.body)
  new_organization.save(function (err, organization) {
    if (err) {
      res.send(err)
    } else {
      res.json(organization)
    }
  })
}

exports.readOrganization = function (req, res) {
  Organization
    .findById(req.params.organizationId, function (err, organization) {
      if (err) {
        res.send(err)
      } else if (!organization) {
        res.status(204).send()
      } else {
        res.json(organization)
      }
    })
}

exports.updateOrganization = function (req, res) {
  Organization
    .findOneAndUpdate({
      _id: req.params.organizationId
    }, req.body, {
      new: true
    }, function (err, organization) {
      if (err) {
        res.send(err)
      } else if (!organization) {
        res.status(204).send()
      } else {
        res.json(organization)
      }
    })
}

exports.deleteOrganization = function (req, res) {

  Organization
    .remove({
      _id: req.params.organizationId
    }, function (err, organization) {
      if (err) {
        res.send(err)
      } else if (!organization) {
        res.status(204).send()
      } else {
        res.json({
          message: 'Organization successfully deleted'
        })
      }
    })
}