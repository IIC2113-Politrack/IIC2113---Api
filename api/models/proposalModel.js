'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProposalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        default: false
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
}, {timestamps: true});

ProposalSchema.methods.follow = function follow(userId) {
    // should relate the user to the current proposal
    return;
};

module.exports = mongoose.model('Proposals', ProposalSchema);