'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var EvidenceSchema = new Schema({
  description: {
    type: String
  },
  isGood: {
    type: Boolean
  },
  data: {
    type: String
  },
  format: {
    type: String
  }
}, {timestamps: true})

module.exports = mongoose.model('Evidence', EvidenceSchema)