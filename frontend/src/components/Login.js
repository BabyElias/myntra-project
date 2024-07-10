import React, { useState } from 'react';
import { useFirebase } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useFirebase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.login(email, password);
      console.log('Login successful');
      // Redirect or show success message
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle error, show message to user
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;