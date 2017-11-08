'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProposalSchema = new Schema({
  id: {
    type: Number
  },
  title: {
    type: String
  },
  slug: {
    type: String
  },
  get_absolute_url: {
    type: String
  },
  data: {
    title: {
      type: String
    },
    terms_and_conditions: {
      type: Boolean
    },
    solution_at_the_end: {
      type: String
    },
    when: {
      type: String
    },
    solution: {
      type: String
    },
    problem: {
      type: String
    },
    clasification: {
      type: String
    },
    causes: {
      type: String
    }
  },
  proposer: {
    type: String
  },
  created: {
    type: String
  },
  clasification: {
    type: String
  },
  is_local_meeting: {
    type: Boolean
  },
  nro_supports: {
    type: Number
  },
  state: {
    type: Boolean
  }
}, {timestamps: true})

module.exports = mongoose.model('Proposal', ProposalSchema)