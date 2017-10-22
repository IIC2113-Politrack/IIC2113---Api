'use strict';

var mongoose = require('mongoose'),
    Politician = require('../models/politicianModel');

exports.list_all_politicians = function (req, res) {
    Politician
        .find({}, function (err, politician) {
            if (err) 
                res.send(err);
            res.json(politician);
        });
};

exports.create_a_politician = function (req, res) {
    var new_politician = new Politician(req.body);
    new_politician.save(function (err, politician) {
        if (err) 
            res.send(err);
        res.json(politician);
    });
};

exports.read_a_politician = function (req, res) {
    Politician
        .findById(req.params.politicianId, function (err, politician) {
            if (err) 
                res.send(err);
            res.json(politician);
        });
};

exports.update_a_politician = function (req, res) {
    Politician
        .findOneAndUpdate({
            _id: req.params.politicianId
        }, req.body, {
            new: true
        }, function (err, politician) {
            if (err) 
                res.send(err);
            res.json(politician);
        });
};

exports.delete_a_politician = function (req, res) {

    Politician
        .remove({
            _id: req.params.politicianId
        }, function (err, politician) {
            if (err) 
                res.send(err);
            res.json({message: 'Politician successfully deleted'});
        });
};