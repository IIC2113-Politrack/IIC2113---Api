'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var OrganizationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamps: true})

module.exports = mongoose.model('Organization', OrganizationSchema)