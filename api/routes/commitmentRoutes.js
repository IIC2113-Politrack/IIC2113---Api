var express = require('express')
var router = express.Router()
var commitments = require('../controllers/commitmentController')

/* GET home page. */
router.get('/', commitments.listAllCommitments)

router.get('/:commitmentId', commitments.readCommitment)

router.get('/:commitmentId/evidences', commitments.getAllEvidences)

router.post('/:commitmentId/evidences', commitments.addEvidence)

router.delete('/:commitmentId', commitments.deleteCommitment)

module.exports = router