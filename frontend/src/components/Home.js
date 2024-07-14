import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import Navbar from './Navbar';
import './ProductCard.css'; // Import the CSS for styling

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="product-container">
        {products.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
