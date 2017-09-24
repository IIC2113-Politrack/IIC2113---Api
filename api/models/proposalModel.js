'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProposalSchema = new Schema({
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
    }
},  {timestamps: true});

module.exports = mongoose.model('Proposals', ProposalSchema);