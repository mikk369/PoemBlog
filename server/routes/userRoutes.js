const express = require('express');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/users', authController.signup);
router.post('/sessions', authController.login);

module.exports = router;
