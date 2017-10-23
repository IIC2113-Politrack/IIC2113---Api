'use strict';

var mongoose = require('mongoose'),
    Comment = require('../models/commentModel');

exports.listAllComments = function (req, res) {
    Comment
        .find({}, function (err, comment) {
            if (err) 
                res.send(err);
            res.json(comment);
        });
};

exports.createComment = function (req, res) {
    var new_comment = new Comment(req.body);
    new_comment.save(function (err, comment) {
        if (err) 
            res.send(err);
        res.json(comment);
    });
};

exports.readComment = function (req, res) {
    Comment
        .findById(req.params.commentId, function (err, comment) {
            if (err) 
                res.send(err);
            res.json(comment);
        });
};

exports.updateComment = function (req, res) {
    Comment
        .findOneAndUpdate({
            _id: req.params.commentId
        }, req.body, {
            new: true
        }, function (err, comment) {
            if (err) 
                res.send(err);
            res.json(comment);
        });
};

exports.deleteComment = function (req, res) {

    Comment
        .remove({
            _id: req.params.commentId
        }, function (err, comment) {
            if (err) 
                res.send(err);
            res.json({message: 'Comment successfully deleted'});
        });
};