'use strict'

let mongoose = require('mongoose'),
  User = require('../models/userModel')

exports.listAllUsers = function (req, res) {
  User
    .find({}, function (err, users) {
      if (err) {
        res.send(err)
      } else {
        res.json(users)
      }
    })
}

exports.createUser = function (req, res) {
  let new_user = new User(req.body)
  new_user.save(function (err, user) {
    if (err) {
      res.send(err)
    } else {
      res.json(user)
    }
  })
}

exports.readUser = function (req, res) {
  User
    .findById(req.params.userId, function (err, user) {
      if (err) {
        res.send(err)
      } else if (!user) {
        res.status(204).send()
      } else {
        res.json(user)
      }
    })
}

exports.updateUser = function (req, res) {
  User
    .findOneAndUpdate({
      _id: req.params.userId
    }, req.body, {
      new: true
    }, function (err, user) {
      if (err) {
        res.send(err)
      } else if (!user) {
        res.status(204).send()
      } else {
        res.json(user)
      }
    })
}

exports.deleteUser = function (req, res) {

  User
    .findOneAndRemove({
      _id: req.params.userId
    }, function (err, user) {
      if (err) {
        res.send(err)
      } else if (!user) {
        res.status(204).send()
      } else {
        res.json({
          message: 'User successfully deleted'
        })
      }
    })
}