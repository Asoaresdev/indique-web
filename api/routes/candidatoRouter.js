var express = require('express');
const { create } = require('../controller/candidateController');
const candidato = require('../controller/candidateController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/api', candidato.create)
router.post('/api', candidato.login)

module.exports = router;
