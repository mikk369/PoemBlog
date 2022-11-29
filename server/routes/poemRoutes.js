const express = require('express');
const router = express.Router();
const poemApi = require('./../controllers/poemApi');

router.route('/').get(poemApi.getAllPoems);

module.exports = router;
