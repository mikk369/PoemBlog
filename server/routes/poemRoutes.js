const express = require('express');
const router = express.Router();
const poemApi = require('./../controllers/poemApi');
const authController = require('./../controllers/authController');

router
  .route('/')
  .get(poemApi.getAllPoems)
  .post(authController.protect, poemApi.createPoem);

module.exports = router;
