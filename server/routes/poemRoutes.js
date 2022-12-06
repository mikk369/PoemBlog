const express = require('express');
const router = express.Router();
const poemApi = require('./../controllers/poemApi');
const authController = require('./../controllers/authController');

router
  .route('/')
  .get(poemApi.getAllPoems)
  .post(poemApi.createPoem);

router
  .route('/:id')
  .get(poemApi.getPoem)
  .patch(poemApi.updatePoem)
  .delete( poemApi.deletePoem);

module.exports = router;
