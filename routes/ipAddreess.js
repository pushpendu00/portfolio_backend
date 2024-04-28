const router = require('express').Router();



router.get('/',require('../controllers/ipAddressController').all_ip_address);

router.post('/add',require('../controllers/ipAddressController').add_ip_address);

router.post('/follow-unfollow',require('../controllers/ipAddressController').follow_unfollow);



module.exports = router;