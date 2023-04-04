const express = require('express');
const router = express.Router();

const clues = require('../controllers/clue.controller.js');

router.get('/clues/:clueId', clues.findByURLStem);

// TODO: These routes need authorization middleware
router.get('/clues', clues.findAll);
router.post('/clues', clues.create);
router.put('/clues/:clueId', clues.update);
router.delete('/clues/:clueId', clues.delete);

module.exports = router;