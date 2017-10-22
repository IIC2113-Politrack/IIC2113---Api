'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Politicians', PoliticianSchema);