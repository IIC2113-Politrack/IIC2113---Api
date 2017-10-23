'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
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
    followedProposals: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Proposal'
        }
    ],
    isOrganizationAdmin: {
        type: Boolean,
        default: false
    },
    organization: {
        type: Schema.Types.ObjectId,
        ref: 'Organization',
        default: null
    },
    evidences: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Evidence'
        }
    ]
}, {timestamps: true});

UserSchema.methods.addEvidence = function addEvidence(evidenceId) {
    // only organization admins can add evidence.
    if (!this.isOrganizationAdmin) {
        return
    };
    // this method should relate the evidence to the organizationAdmin uploading it
    return;
};

UserSchema.methods.subscribeToProposal = function subscribeToProposal(proposalId) {
    // only politician can subscribe to a proposal.
    if (!this.isPolitician) {
        return
    };
    // this method should relate the proposal to the politician subscribing to it
    return;
};

module.exports = mongoose.model('User', UserSchema);