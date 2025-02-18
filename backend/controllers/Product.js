const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  codeFrom: {
    type: String,
    required: true,
  },
  codeTo: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Science', 'Economics', 'Fiction', 'Children', 'Personal Development'], // Only allowed categories
  },
});

// Create a model for the product
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
