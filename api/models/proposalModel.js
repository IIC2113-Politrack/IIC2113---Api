'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
          type: String,
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