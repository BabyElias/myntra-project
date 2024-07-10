import React, { useState } from 'react';
import { useFirebase } from '../firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useFirebase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.signup(email, password);
      console.log('Signup successful');
      // Redirect or show success message
    } catch (error) {
      console.error('Signup error:', error.message);
      // Handle error, show message to user
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
