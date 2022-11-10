const express = require('express');
const router = express.Router();
const LoginController = require('../app/controllers/loginController');

router.get('/', LoginController.show);

module.exports = router;
