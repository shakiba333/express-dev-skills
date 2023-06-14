var express = require('express');
var router = express.Router();

//All actual paths start with '/skills'

var skillsCtrl = require('../controllers/skills')

router.get('/', skillsCtrl.index)
router.get('/:id', skillsCtrl.show);

module.exports = router;
