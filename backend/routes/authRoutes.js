const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust path as per your project structure

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user already exists in MongoDB
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: 'Signup successful', user: newUser });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Signup failed' });
  }
});

module.exports = router;
