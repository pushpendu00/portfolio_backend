
const router = require('express').Router();

router.get('/',require('../controllers/homeController').home);

router.use('/ip',require('./ipAddreess'));

router.use('/message',require('./message'));


module.exports = router;