import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import './WardrobeDetailsPage.css'; // Create this CSS file for styling

const WardrobeDetailsPage = () => {
  const { wardrobeId } = useParams();
  const [wardrobe, setWardrobe] = useState(null);

  useEffect(() => {
    // Fetch wardrobe details and products by wardrobe ID
    const fetchWardrobeDetails = async () => {
      try {
        console.log(wardrobeId);
        const res = await axios.get(`http://localhost:5000/api/wardrobes/details/${wardrobeId}`);
        setWardrobe(res.data); // Assuming res.data contains wardrobe details with products
        
      } catch (error) {
        console.error('Error fetching wardrobe details:', error);
      }
    };

    fetchWardrobeDetails();
  }, [wardrobeId]);

  if (!wardrobe) return <div>Loading...</div>;

  return (
    <div className="wardrobe-details-page">
      <Navbar />
      <div className="wardrobe-info">
        <h2>{wardrobe.name}</h2>
        <div className="products-container">
          {wardrobe.products.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WardrobeDetailsPage;
