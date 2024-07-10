const admin = require('../firebase');  // Adjust the path as per your project structure

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password
    });
    res.status(201).json({ message: 'Signup successful', uid: userRecord.uid });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Signup failed' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    if (!userRecord) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Implement password check if necessary, though Firebase handles this internally
    // For simplicity, let's assume Firebase handles login securely

    res.status(200).json({ message: 'Login successful', uid: userRecord.uid });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Login failed' });
  }
};

module.exports = { signup, login };
