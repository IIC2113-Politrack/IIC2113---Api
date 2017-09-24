'use strict';
module.exports = function (app) {
    var proposals = require('../controllers/proposalController');

    // proposal Routes
    app
        .route('/proposals')
        .get(proposals.list_all_proposals)
        .post(proposals.create_a_proposal);

    app
        .route('/proposals/:proposalId')
        .get(proposals.read_a_proposal)
        .put(proposals.update_a_proposal)
        .delete(proposals.delete_a_proposal);
};
