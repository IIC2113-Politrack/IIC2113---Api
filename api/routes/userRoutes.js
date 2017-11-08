var express = require('express')
var router = express.Router()
var users = require('../controllers/userController')

/* GET home page. */
router.get('/', users.listAllUsers)

router.post('/', users.createUser)

router.get('/:userId', users.readUser)

router.put('/:userId', users.updateUser)

router.delete('/:userId', users.deleteUser)

module.exports = router