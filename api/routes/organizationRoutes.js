var express = require('express')
var router = express.Router()
var organizations = require('../controllers/organizationController')

/* GET home page. */
router.get('/', organizations.listAllOrganizations)

router.post('/', organizations.createOrganization)

router.get('/:organizationId', organizations.readOrganization)

router.put('/:organizationId', organizations.updateOrganization)

router.delete('/:organizationId', organizations.deleteOrganization)

module.exports = router