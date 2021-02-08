const candidateController = require('../controllers/candidateController');
let express = require('express')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/api/index', candidateController.index)
router.post('/api/candidate', candidateController.Store)
router.post('/api/login',candidateController.login)

module.exports = router;
