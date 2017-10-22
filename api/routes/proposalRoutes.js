var express = require('express');
var router = express.Router();
var proposals = require('../controllers/proposalController');

/* GET home page. */
router.get('/', proposals.list_all_proposals);

router.post('/', proposals.create_a_proposal);

router.get('/:proposalId', proposals.read_a_proposal);

router.put('/:proposalId', proposals.update_a_proposal);

router.delete('/:proposalId', proposals.delete_a_proposal);

module.exports = router;