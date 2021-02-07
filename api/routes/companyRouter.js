const companyController = require('../controllers/companyController');
const companyController = require('../controllers/companyController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/api/company', companyController.Store)
router.post('/api/login', companyController.login)

module.exports = router;