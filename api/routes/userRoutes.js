var express = require('express');
var router = express.Router();
var users = require('../controllers/userController');

/* GET home page. */
router.get('/', users.list_all_users);

router.post('/', users.create_a_user);

router.get('/:userId', users.read_a_user);

router.put('/:userId', users.update_a_user);

router.delete('/:userId', users.delete_a_user);

module.exports = router;