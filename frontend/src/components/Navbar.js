// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import myntraLogo from '../myntralogo.jfif';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={myntraLogo} alt="Myntra Logo" className="logo" />
        </Link>
        <div className="navbar-links">
          <Link to="/men" className="nav-link">Men</Link>
          <Link to="/women" className="nav-link">Women</Link>
          <Link to="/kids" className="nav-link">Kids</Link>
        </div>
      </div>
      <div className="navbar-right">
        <Link to="/wardrobe">
          <img src="https://i.postimg.cc/xTXq3KZz/images-1.png" alt="Wardrobe Icon" className="logo" />
        </Link>
        <button className="logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
