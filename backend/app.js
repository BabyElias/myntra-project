const express = require('express');
const cors = require('cors');  // Import the cors middleware
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Use the CORS middleware
app.use(cors());

app.use(express.json());

// Connect to MongoDB
connectDB();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
