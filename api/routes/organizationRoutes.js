var express = require('express');
var router = express.Router();
var organizations = require('../controllers/organizationController');

/* GET home page. */
router.get('/', organizations.list_all_organizations);

router.post('/', organizations.create_a_organization);

router.get('/:organizationId', organizations.read_a_organization);

router.put('/:organizationId', organizations.update_a_organization);

router.delete('/:organizationId', organizations.delete_a_organization);

module.exports = router;