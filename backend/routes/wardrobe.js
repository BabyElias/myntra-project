const express = require('express');
const router = express.Router();
const wardrobeController = require('../controllers/wardrobeController');

router.post('/add', wardrobeController.addWardrobe);
router.get('/:id', wardrobeController.getWardrobe);
router.get('/', wardrobeController.getAllWardrobes);

module.exports = router;
