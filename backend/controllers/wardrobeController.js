const Wardrobe = require('../models/Wardrobe');

const addWardrobe = async (req, res) => {
  try {
    const wardrobe = new Wardrobe(req.body);
    await wardrobe.save();
    res.status(201).json(wardrobe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getWardrobe = async (req, res) => {
  try {
    const wardrobe = await Wardrobe.findById(req.params.id).populate('products');
    if (!wardrobe) return res.status(404).json({ message: 'Wardrobe not found' });
    res.json(wardrobe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllWardrobes = async (req, res) => {
  try {
    const wardrobes = await Wardrobe.find().populate('products');
    res.json(wardrobes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addWardrobe, getWardrobe, getAllWardrobes };
