const router = require('express').Router();



router.get('/',require('../controllers/ipAddressController').all_ip_address);

router.post('/add',require('../controllers/ipAddressController').add_ip_address);

module.exports = router;