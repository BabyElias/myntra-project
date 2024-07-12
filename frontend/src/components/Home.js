// components/Home.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';

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
      {products.map(product => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Home;
