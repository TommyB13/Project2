const express = require('express');
const router = express.Router();

const clues = require('../controllers/clue.controller.js');

router.get('/clues/:clueId', clues.findOne);

// TODO: post, put, and delete need authorization middleware
router.post('/clues', clues.create);
router.put('/clues/:clueId', clues.update);
router.delete('/clues/:clueId', clues.delete);

module.exports = router;