import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductCard.css'; // Import the CSS for styling

const Product = ({ product }) => {
  const userEmail = "shree@gmail.com"; // Hardcoded user email for now
  const [wardrobeName, setWardrobeName] = useState('');
  const [wardrobes, setWardrobes] = useState([]);
  const [selectedWardrobe, setSelectedWardrobe] = useState('');
  const [showOptions, setShowOptions] = useState(false);

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
  }, [userEmail]);

  const handleAddToBagClick = () => {
    setShowOptions(!showOptions);
  };

  const handleAddToWardrobe = async () => {
    try {
      console.log(`Adding product ${product._id} to wardrobe ${selectedWardrobe || wardrobeName}`);
      console.log('Selected wardrobe:', selectedWardrobe);
      const response = await axios.post(`http://localhost:5000/api/wardrobes/addToWardrobe/${userEmail}/${product._id}`, {
        wardrobeName: selectedWardrobe ? null : wardrobeName, // Send wardrobe name only if a new wardrobe is being created
        wardrobeId: selectedWardrobe // Send existing wardrobe ID if selected
      });
      alert(response.data.message);
      setShowOptions(false); // Hide options dropdown after successful addition
      setWardrobeName(''); // Clear new wardrobe name input
      setSelectedWardrobe(''); // Clear selected wardrobe
    } catch (error) {
      console.error('Error adding product to wardrobe:', error);
      alert(error.response?.data?.message || 'Failed to add product to wardrobe');
    }
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <button className="add-to-bag-btn" onClick={handleAddToBagClick}>
          Add to Wardrobe
        </button>
        {showOptions && (
          <div className="options-dropdown">
            <input
              type="text"
              placeholder="New Capsule Name"
              value={wardrobeName}
              onChange={(e) => setWardrobeName(e.target.value)}
              disabled={!!selectedWardrobe}
              className="wardrobe-input"
            />
            <select
              onChange={(e) => setSelectedWardrobe(e.target.value)}
              value={selectedWardrobe}
              className="wardrobe-select"
            >
              <option value="">Select Existing Capsule</option>
              {wardrobes.map((wardrobe) => (
                <option key={wardrobe._id} value={wardrobe._id}>{wardrobe.name}</option>
              ))}
            </select>
            <button onClick={handleAddToWardrobe} className="add-to-wardrobe-btn">
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
