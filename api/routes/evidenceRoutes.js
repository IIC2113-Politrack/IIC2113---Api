var express = require('express');
var router = express.Router();
var evidences = require('../controllers/evidenceController');

/* GET home page. */
router.get('/', evidences.list_all_evidences);

router.post('/', evidences.create_a_evidence);

router.get('/:evidenceId', evidences.read_a_evidence);

router.put('/:evidenceId', evidences.update_a_evidence);

router.delete('/:evidenceId', evidences.delete_a_evidence);

module.exports = router;