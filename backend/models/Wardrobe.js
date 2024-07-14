const mongoose = require('mongoose');

const wardrobeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  thumbnail: {
    type: String 
  },
  public: {
    type: Boolean,
    default: false
  }
});

const Wardrobe = mongoose.model('Wardrobe', wardrobeSchema);

module.exports = Wardrobe;
