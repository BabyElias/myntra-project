// components/Product.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = ({ product }) => {
  const userEmail = "shree@gmail.com"; // Hardcoded user email for now
  const [wardrobeName, setWardrobeName] = useState(''); // State to hold new wardrobe name
  const [wardrobes, setWardrobes] = useState([]); // State to hold existing wardrobes
  const [selectedWardrobe, setSelectedWardrobe] = useState(''); // State to hold selected wardrobe name

  useEffect(() => {
    // Fetch user's wardrobes
    const fetchWardrobes = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/wardrobes/${userEmail}`);
        setWardrobes(res.data);
      } catch (error) {
        console.error('Error fetching wardrobes:', error);
      }
    };

    fetchWardrobes();
  }, []);

  const handleAddToWardrobe = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/api/wardrobes/addToWardrobe/${userEmail}/${product._id}`, {
        wardrobeName: selectedWardrobe ? '' : wardrobeName, // Send wardrobe name only if a new wardrobe is being created
        existingWardrobeName: selectedWardrobe // Send existing wardrobe name if selected
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error adding product to wardrobe:', error);
      alert(error.response.data.message || 'Failed to add product to wardrobe');
    }
  };

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <input
        type="text"
        placeholder="New Wardrobe Name"
        value={wardrobeName}
        onChange={(e) => setWardrobeName(e.target.value)}
        disabled={!!selectedWardrobe} // Disable if an existing wardrobe is selected
      />
      <select onChange={(e) => setSelectedWardrobe(e.target.value)} value={selectedWardrobe}>
        <option value="">Select Existing Wardrobe</option>
        {wardrobes.map((wardrobeName, index) => (
          <option key={index} value={wardrobeName}>{wardrobeName}</option>
        ))}
      </select>
      <button onClick={handleAddToWardrobe}>Add to Wardrobe</button>
    </div>
  );
};

export default Product;
