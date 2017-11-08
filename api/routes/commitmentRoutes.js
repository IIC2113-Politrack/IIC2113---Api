var express = require('express')
var router = express.Router()
var commitments = require('../controllers/commitmentController')

/* GET home page. */
router.get('/', commitments.listAllCommitments)

router.get('/:commitmentId', commitments.readCommitment)

router.get('/:commitmentId/evidences', commitments.getCommitmentEvidences)

router.post('/:commitmentId/evidences', commitments.addEvidenceToCommitment)

router.delete('/:commitmentId', commitments.deleteCommitment)

module.exports = router