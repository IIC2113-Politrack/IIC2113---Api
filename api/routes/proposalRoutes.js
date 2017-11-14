let express = require('express')
let router = express.Router()
let proposals = require('../controllers/proposalController')

/* GET home page. */
router.get('/', proposals.listAllProposals)

router.post('/', proposals.createProposal)

router.get('/:proposalId', proposals.readProposal)

router.put('/:proposalId', proposals.updateProposal)

router.delete('/:proposalId', proposals.deleteProposal)

module.exports = router