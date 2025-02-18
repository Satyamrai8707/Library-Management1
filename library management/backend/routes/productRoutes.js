const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Route to create a new product
router.post('/add-product', async (req, res) => {
  try {
    const { codeFrom, codeTo, category } = req.body;

    // Create a new product
    const newProduct = new Product({ codeFrom, codeTo, category });

    // Save the product to the database
    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully!', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
});

// Route to get all products (optional for listing them in the future)
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
