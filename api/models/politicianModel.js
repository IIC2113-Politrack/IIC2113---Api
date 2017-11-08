'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PoliticianSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  party: {
    type: String
  },
  charge: {
    type: String
  },
  biography: {
    type: String
  },
  slogan: {
    type: String
  },
  commitments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Commitment'
    }
  ]
}, {timestamps: true})

PoliticianSchema.methods.addProposal = function addProposal(proposalId) {
  return new Promise((resolve, reject) => {
    let result = null
    this
      .commitments
      .push({proposal: proposalId, evidences: []})
    this.save(function (error, updatedPolitician) {
      if (error) {
        console.log(error)
        reject(error)
        return
      } else {
        console.log("Proposal added to politician " + updatedPolitician.firstname + " " + updatedPolitician.lastname)
        resolve(updatedPolitician)
        return
      }
    })
  })
}

PoliticianSchema.methods.addEvidence = function addEvidence(evidenceId, proposalId) {
  let result = null
  return new Promise((resolve, reject) => {
    for (const proposal of this.proposals) {
      if (proposal.proposal == proposalId) {
        proposal
          .evidences
          .push(evidenceId)
        this.save(function (error, updatedPolitician) {
          if (error) {
            reject(error)
            return
          }
          resolve(updatedPolitician)
          return
        })
      }
    }
  })
}

module.exports = mongoose.model('Politician', PoliticianSchema)