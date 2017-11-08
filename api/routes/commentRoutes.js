var express = require('express')
var router = express.Router()
var comments = require('../controllers/commentController')

/* GET home page. */
router.get('/', comments.listAllComments)

router.post('/', comments.createComment)

router.get('/:commentId', comments.readComment)

router.put('/:commentId', comments.updateComment)

router.delete('/:commentId', comments.deleteComment)

module.exports = router