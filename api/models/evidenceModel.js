'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EvidenceSchema = new Schema({
    politician: {
        type: Schema.Types.ObjectId,
        ref: 'Politician',
        required: true
    },
    proposal: {
        type: Schema.Types.ObjectId,
        ref: 'Proposal',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    numUpVotes: {
        type: Number,
        default: 0
    },
    numDownVotes: {
        type: Number,
        default: 0
    },
    url: {
        type: String,
        default: null
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true});

EvidenceSchema
    .virtual('getRating')
    .get(function () {
        // should return the current evidence rating (upvotes - downvotes)
        return;
    });

EvidenceSchema.methods.likeEvidence = function likeEvidence(userId) {
    // should increase numUpVotes by one
    return;
};

EvidenceSchema.methods.dislikeEvidence = function dislikeEvidence(userId) {
    // should decrease numUpVotes by one
    return;
};
module.exports = mongoose.model('Evidences', EvidenceSchema);