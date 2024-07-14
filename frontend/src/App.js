import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import WardrobePage from './components/WardrobePage';
import WardrobeDetailsPage from './components/WardrobeDetailsPage';
import { HomePage } from './components/HomePage';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/homepage" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/wardrobe" element={<WardrobePage/>} />
          <Route path="/wardrobe/details/:wardrobeId" element={<WardrobeDetailsPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;