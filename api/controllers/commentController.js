'use strict'

let mongoose = require('mongoose'),
  Comment = require('../models/commentModel')

exports.listAllComments = function (req, res) {
  Comment
    .find({}, function (err, comments) {
      if (err) {
        res.send(err)
      } else {
        res.json(comments)
      }
    })
}

exports.createComment = function (req, res) {
  let new_comment = new Comment(req.body)
  new_comment.save(function (err, comment) {
    if (err) {
      res.send(err)
    } else {
      res.json(comment)
    }
  })
}

exports.readComment = function (req, res) {
  Comment
    .findById(req.params.commentId, function (err, comment) {
      if (err) {
        res.send(err)
      } else if (!comment) {
        res.status(204).send()
      } else {
        res.json(comment)
      }
    })
}

exports.updateComment = function (req, res) {
  Comment
    .findOneAndUpdate({
      _id: req.params.commentId
    }, req.body, {
      new: true
    }, function (err, comment) {
      if (err) {
        res.send(err)
      } else if (!comment) {
        res.status(204).send()
      } else {
        res.json(comment)
      }
    })
}

exports.deleteComment = function (req, res) {

  Comment
    .findOneAndRemove({
      _id: req.params.commentId
    }, function (err, comment) {
      if (err) {
        res.send(err)
      } else if (!comment) {
        res.status(204).send()
      } else {
        res.json({
          message: 'Comment successfully deleted'
        })
      }
    })
}