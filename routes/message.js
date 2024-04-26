const router = require('express').Router();



router.get('/',require('../controllers/message_controler').allMessage);

router.post('/add',require('../controllers/message_controler').add_message);

module.exports = router;