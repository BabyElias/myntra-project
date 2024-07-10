const express = require('express');
const cors = require('cors');  // Import the cors middleware
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/product');
const wardrobeRoutes = require('./routes/wardrobe');

const app = express();

// Use the CORS middleware
app.use(cors());

app.use(express.json());

// Connect to MongoDB
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/wardrobes', wardrobeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
