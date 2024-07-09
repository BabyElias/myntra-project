const User = require('../models/User');

const signupController = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Create new user
    const newUser = new User({ email, password });

    // Save user to database
    await newUser.save();

    // Respond with success message or user data
    res.status(200).json({ message: 'Signup successful', user: newUser });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Signup failed' });
  }
};

module.exports = {
  signupController,
};
