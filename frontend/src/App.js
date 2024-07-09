// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  return (
  
      <div className="App">
        <Routes>
          <Route path="/signup" component={<SignUp />} />
          <Route path="/signin" component={<Login />} />
          {/* Add more routes for other pages/components */}
        </Routes>
      </div>
   
  );
};

export default App;
