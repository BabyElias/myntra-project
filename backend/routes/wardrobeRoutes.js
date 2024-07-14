// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Wardrobe = require('../models/Wardrobe');
const mongoose = require('mongoose');

// Fetch all wardrobes for a user by email
router.get('/:email', async (req, res) => {
  const { email } = req.params;

  try {
    // Find the user by email
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find all wardrobes associated with the user
    const wardrobes = await Wardrobe.find({ userId: user._id });

    // Extract only the names from the wardrobes
    const wardrobeNames = wardrobes.map(wardrobe => wardrobe.name);

    // // Send the names of wardrobes as response
    // res.status(200).json(wardrobeNames);
    // const wardrobeData = wardrobes.map(wardrobe => ({
    //   _id: wardrobe._id,
    //   name: wardrobe.name,
    // }));

    // Send response with wardrobe data
    res.status(200).json(wardrobes);
  } catch (error) {
    console.error('Error fetching wardrobes:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add product to wardrobe
router.post('/addToWardrobe/:email/:productId', async (req, res) => {
  const { email, productId } = req.params;
  const { wardrobeName, existingWardrobeName } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let wardrobe;

    if (existingWardrobeName) {
      // Find the existing wardrobe
      wardrobe = await Wardrobe.findOne({ userId: user._id, name: existingWardrobeName });
      if (!wardrobe) {
        return res.status(404).json({ message: 'Wardrobe not found' });
      }

      // Check if the product already exists in the wardrobe
      const productExists = wardrobe.products.some(product => product.toString() === productId);
      if (productExists) {
        return res.status(400).json({ message: 'Product already exists in the wardrobe' });
      }

      wardrobe.products.push(productId);
    } else {
      // Create a new wardrobe
      wardrobe = new Wardrobe({
        userId: user._id,
        name: wardrobeName,
        products: [productId]
      });
      user.wardrobes.push(wardrobeName);
      await user.save();
    }

    await wardrobe.save();

    res.status(200).json({ message: 'Product added to wardrobe successfully' });
  } catch (error) {
    console.error('Error adding product to wardrobe:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/details/:wardrobeId', async (req, res) => {
  const { wardrobeId } = req.params;

  try {
    const wardrobe = await Wardrobe.findById(wardrobeId).populate('products');
    if (!wardrobe) {
      return res.status(404).send({ message: 'Wardrobe not found' });
    }
    res.status(200).send(wardrobe);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching wardrobe details', error });
  }
});
module.exports = router;
