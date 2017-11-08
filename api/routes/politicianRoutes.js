var express = require('express')
var router = express.Router()
var politicians = require('../controllers/politicianController')

/* GET home page. */
router.get('/', politicians.listAllPoliticians)

router.post('/', politicians.createPolitician)

router.get('/:politicianId', politicians.readPolitician)

router.get('/:politicianId/commitments', politicians.getPoliticianCommitments)

router.post('/:politicianId/commitments', politicians.addCommitment)

router.put('/:politicianId', politicians.updatePolitician)

router.delete('/:politicianId', politicians.deletePolitician)

module.exports = router