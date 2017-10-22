var express = require('express');
var router = express.Router();
var politicians = require('../controllers/politicianController');

/* GET home page. */
router.get('/', politicians.list_all_politicians);

router.post('/', politicians.create_a_politician);

router.get('/:politicianId', politicians.read_a_politician);

router.put('/:politicianId', politicians.update_a_politician);

router.delete('/:politicianId', politicians.delete_a_politician);

module.exports = router;