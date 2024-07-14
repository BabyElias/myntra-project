import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './WardrobePage.css';
import exphoto from '../chic.jpg'; // Placeholder image for wardrobe cards
import wardrobeimg from '../ss.PNG'; // Image for left section
import left from '../newimg.jfif'; // Image for right section

const WardrobePage = () => {
  const userEmail = "shree@gmail.com"; // Hardcoded user email for now
  const [wardrobes, setWardrobes] = useState([]);

  useEffect(() => {
    // Fetch user's wardrobe data (names and IDs)
    const fetchWardrobes = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/wardrobes/${userEmail}`);
        setWardrobes(res.data); // Assuming res.data is an array of objects {_id, name}
      } catch (error) {
        console.error('Error fetching wardrobes:', error);
      }
    };

    fetchWardrobes();
  }, [userEmail]);

  return (
    <div className="wardrobe-page">
      <Navbar />
      <div className="photo-space">
      <img src={left} alt="Left Image"/>
        <img src={wardrobeimg} alt="Wardrobe Image" className="photo-right"c />
        
      </div>
      <div className="wardrobes-container">
        {wardrobes.map((wardrobe) => (
          <Link to={`/wardrobe/details/${wardrobe._id}`} key={wardrobe._id} className="wardrobe-card">
            <img src={wardrobe.thumbnail || exphoto} alt="Wardrobe" className="wardrobe-image" />
            <div className="wardrobe-details">
              <h3 className="wardrobe-name">{wardrobe.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WardrobePage;
