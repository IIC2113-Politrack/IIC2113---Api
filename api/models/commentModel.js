'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    numUpvotes: {
        type: Number,
        default: 0
    },
    numDownvotes: {
        type: Number,
        default: 0
    }
},  {timestamps: true});

module.exports = mongoose.model('Comment', CommentSchema);