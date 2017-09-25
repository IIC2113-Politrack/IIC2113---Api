'use strict';
module.exports = function (app) {
    var organizations = require('../controllers/organizationController');

    // organization Routes
    app
        .route('/organizations')
        .get(organizations.list_all_organizations)
        .post(organizations.create_a_organization);

    app
        .route('/organizations/:organizationId')
        .get(organizations.read_a_organization)
        .put(organizations.update_a_organization)
        .delete(organizations.delete_a_organization);
};
