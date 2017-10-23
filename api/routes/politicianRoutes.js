var express = require('express');
var router = express.Router();
var politicians = require('../controllers/politicianController');

/* GET home page. */
router.get('/', politicians.listAllPoliticians);

router.post('/', politicians.createPolitician);

router.post('/:politicianId/proposals', politicians.addProposal);

router.get('/:politicianId', politicians.readPolitician);

router.put('/:politicianId', politicians.updatePolitician);

router.delete('/:politicianId', politicians.deletePolitician);

module.exports = router;