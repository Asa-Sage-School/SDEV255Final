
const express = require('express');
const usrCtrl = require('../controllers/usrCtrl');
const router = express.Router();
const routeAuth = require('../middleware/routeAuth');

router.get('/register', routeAuth.loginRedir, usrCtrl.register);
router.post('/register', usrCtrl.newUser);

router.get('/login', routeAuth.loginRedir, usrCtrl.signIn);
router.post('/login', usrCtrl.login);

router.get('/account', usrCtrl.account);

module.exports = router;