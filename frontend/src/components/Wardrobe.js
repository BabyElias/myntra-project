// components/Wardrobe.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Wardrobe = () => {
  const [wardrobes, setWardrobes] = useState([]);

  useEffect(() => {
    const fetchWardrobes = async () => {
      const res = await axios.get('/api/wardrobes');
      setWardrobes(res.data);
    };

    fetchWardrobes();
  }, []);

  return (
    <div className="wardrobe">
      {wardrobes.map(wardrobe => (
        <div key={wardrobe._id} className="capsule">
          <h2>{wardrobe.name}</h2>
          <div className="products">
            {wardrobe.products.map(product => (
              <div key={product._id} className="product">
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wardrobe;
