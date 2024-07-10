const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/add', productController.addProduct);
router.get('/:id', productController.getProduct);
router.get('/', productController.getAllProducts);

module.exports = router;
