const express = require('express');
const router = express.Router();

const teamsController = require('../controllers/teams.controller');

router.get('/teams', teamsController.index2);
router.get('/team/:id', teamsController.detail2);

module.exports = router;