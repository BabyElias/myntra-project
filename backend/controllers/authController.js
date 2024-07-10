const admin = require('../firebase');  
const User = require('../models/User');  

const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password
    });

    
    const user = new User({
      email: userRecord.email,
      password: password, 
      uid: userRecord.uid 
    });

    const savedUser = await user.save();

    const fetchedUser = await User.findOne({ uid: userRecord.uid });
    if (!fetchedUser) {
      throw new Error('User not saved in MongoDB');
    }

    console.log('User saved in MongoDB:', fetchedUser);

    res.status(201).json({ message: 'Signup successful', uid: userRecord.uid });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Signup failed', error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await admin.auth().getUserByEmail(email);
    if (!userRecord) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Login successful', uid: userRecord.uid });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};

module.exports = { signup, login };
