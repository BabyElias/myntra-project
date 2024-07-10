const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');  // Adjust path as per your project structure

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
