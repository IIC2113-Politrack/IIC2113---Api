'use strict'
let mongoose = require('mongoose')
let Schema = mongoose.Schema

let OrganizationSchema = new Schema({
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
}, {
  timestamps: true
})

module.exports = mongoose.model('Organization', OrganizationSchema)