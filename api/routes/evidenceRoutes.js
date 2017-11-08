var express = require('express')
var router = express.Router()
var evidences = require('../controllers/evidenceController')

router.get('/:evidenceId', evidences.readEvidence)

router.put('/:evidenceId', evidences.updateEvidence)

router.delete('/:evidenceId', evidences.deleteEvidence)

module.exports = router