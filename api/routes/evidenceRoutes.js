let express = require('express')
let router = express.Router()
let evidences = require('../controllers/evidenceController')

router.get('/:evidenceId', evidences.readEvidence)

router.put('/:evidenceId', evidences.updateEvidence)

router.delete('/:evidenceId', evidences.deleteEvidence)

module.exports = router