const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movies.controller');

router.get('/', moviesController.index);
router.get('/movie/:id', moviesController.detail);

module.exports = router;