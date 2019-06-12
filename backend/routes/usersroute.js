const express = require('express');
const router = express.Router();
const userController = require('../controller/usercontroller');

router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);

module.exports = router;