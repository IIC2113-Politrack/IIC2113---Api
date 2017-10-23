'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Proposal = require('./proposalModel');

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
  proposals: [{
    proposal: {
      type: Schema.Types.ObjectId,
      ref: 'Proposal',
    },
    evidences: [{
      type: Schema.Types.ObjectId,
      ref: 'Evidence'
    }]
  }]
}, {
  timestamps: true
});


PoliticianSchema.methods.addProposal = function addProposal(proposalId) {
  let result = null;
  this.proposals.push({
    proposal: proposalId,
    evidences: []
  });
  this.save(function (error, updatedPolitician) {
    if (error) {
      console.log(error);
    }
    result = updatedPolitician;
  });
};

PoliticianSchema.methods.addEvidence = function addEvidence(evidenceId, proposalId) {
  let result = null;
  return new Promise((resolve, reject) => {
    for (const proposal of this.proposals) {
      console.log(proposal.proposal)
      console.log(proposalId)
      if (proposal.proposal == proposalId) {
        console.log("XD")
        proposal.evidences.push(evidenceId)
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
};

module.exports = mongoose.model('Politician', PoliticianSchema);