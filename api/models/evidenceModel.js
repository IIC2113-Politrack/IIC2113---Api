'use strict'
let mongoose = require('mongoose')
let Schema = mongoose.Schema

let EvidenceSchema = new Schema({
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
}, {
  timestamps: true
})

module.exports = mongoose.model('Evidence', EvidenceSchema)