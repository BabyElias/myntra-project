const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');  // Adjust path as per your project structure
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', authRoutes);  // Base API route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

