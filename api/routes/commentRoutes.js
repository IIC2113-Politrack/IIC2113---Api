var express = require('express');
var router = express.Router();
var comments = require('../controllers/commentController');

/* GET home page. */
router.get('/', comments.list_all_comments);

router.post('/', comments.create_a_comment);

router.get('/:commentId', comments.read_a_comment);

router.put('/:commentId', comments.update_a_comment);

router.delete('/:commentId', comments.delete_a_comment);

module.exports = router;