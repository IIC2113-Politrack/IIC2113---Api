'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Proposal = require('./proposalModel');

var ProposalSchema = new Schema({
  proposal: {
    type: Schema.Types.ObjectId,
    ref: 'Proposal',
  },
  evidences: [{
    type: Schema.Types.ObjectId,
    ref: 'Evidence'
  }]
}, {
  _id: false
})

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
  proposals: [ProposalSchema]
}, {
  timestamps: true
});


PoliticianSchema.methods.addProposal = function addProposal(proposalId) {
  return new Promise((resolve, reject) => {
    let result = null;
    this.proposals.push({
      proposal: proposalId,
      evidences: []
    });
    this.save(function (error, updatedPolitician) {
      if (error) {
        console.log(error);
        reject(error);
        return
      } else {
        console.log("Proposal added to politician " + updatedPolitician.firstname + " " + updatedPolitician.lastname)
        resolve(updatedPolitician)
        return
      }
    });
  })
};

PoliticianSchema.methods.addEvidence = function addEvidence(evidenceId, proposalId) {
  let result = null;
  return new Promise((resolve, reject) => {
    for (const proposal of this.proposals) {
      if (proposal.proposal == proposalId) {
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