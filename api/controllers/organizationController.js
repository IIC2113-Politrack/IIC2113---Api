'use strict'

var mongoose = require('mongoose'),
  Organization = require('../models/organizationModel')

exports.listAllOrganizations = function (req, res) {
  Organization
    .find({}, function (err, organization) {
      if (err) 
        res.send(err)
        return
      res.json(organization)
    })
}

exports.createOrganization = function (req, res) {
  var new_organization = new Organization(req.body)
  new_organization.save(function (err, organization) {
    if (err) 
      res.send(err)
      return
    res.json(organization)
  })
}

exports.readOrganization = function (req, res) {
  Organization
    .findById(req.params.organizationId, function (err, organization) {
      if (err) 
        res.send(err)
        return
      res.json(organization)
    })
}

exports.updateOrganization = function (req, res) {
  Organization
    .findOneAndUpdate({
      _id: req.params.organizationId
    }, req.body, {
      new: true
    }, function (err, organization) {
      if (err) 
        res.send(err)
        return
      res.json(organization)
    })
}

exports.deleteOrganization = function (req, res) {

  Organization
    .remove({
      _id: req.params.organizationId
    }, function (err, organization) {
      if (err) 
        res.send(err)
        return
      res.json({message: 'Organization successfully deleted'})
    })
}