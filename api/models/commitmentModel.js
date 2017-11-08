'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CommitmentSchema = new Schema({
  proposal: {
    type: Schema.Types.ObjectId,
    ref: 'Proposal'
  },
  evidences: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Evidence'
    }
  ],
  politician: {
    type: Schema.Types.ObjectId,
    ref: 'Politician'
  }
}, {timestamps: true})

module.exports = mongoose.model('Commitment', CommitmentSchema)