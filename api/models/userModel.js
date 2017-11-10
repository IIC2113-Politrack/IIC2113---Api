'use strict'
let mongoose = require('mongoose')
let Schema = mongoose.Schema

let UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  followedProposals: [{
    type: Schema.Types.ObjectId,
    ref: 'Proposal'
  }],
  isOrganizationAdmin: {
    type: Boolean,
    default: false
  },
  organization: {
    type: Schema.Types.ObjectId,
    ref: 'Organization',
    default: null
  },
  evidences: [{
    type: Schema.Types.ObjectId,
    ref: 'Evidence'
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema)