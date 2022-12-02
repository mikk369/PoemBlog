const express = require('express');
const router = express.Router();
const authController = require('./../controllers/authController');
const userApi = require('./../controllers/userApi');

router.post('/users', authController.signup);
router.post('/sessions', authController.login);

router.route('/getUsers').get(userApi.getAllusers);

router.route('/getUsers/:id').get(userApi.getUser);

module.exports = router;
