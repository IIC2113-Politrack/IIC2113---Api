'use strict';
module.exports = function (app) {
    var evidences = require('../controllers/evidenceController');

    // evidence Routes
    app
        .route('/evidences')
        .get(evidences.list_all_evidences)
        .post(evidences.create_a_evidence);

    app
        .route('/evidences/:evidenceId')
        .get(evidences.read_a_evidence)
        .put(evidences.update_a_evidence)
        .delete(evidences.delete_a_evidence);
};
