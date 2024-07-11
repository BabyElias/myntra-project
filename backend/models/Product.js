const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4, // Generate a UUID for each product
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  metadata: {
    type: [String], // Array of metadata tags
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
