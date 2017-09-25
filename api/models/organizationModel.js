'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrganizationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},  {timestamps: true});

OrganizationSchema.methods.addAdmin = function addAdmin(userId) {
    // should relate the passed user to the organization
    // only if the user has the attribute isOrganizationAdmin setted to 'true'
    return;
};

module.exports = mongoose.model('Organization', OrganizationSchema);