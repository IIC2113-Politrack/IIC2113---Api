'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CommentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  evidence: {
    type: Schema.Types.ObjectId,
    ref: 'Evidence'
  }
}, {timestamps: true})

module.exports = mongoose.model('Comment', CommentSchema)