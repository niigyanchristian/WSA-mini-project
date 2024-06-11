const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image_path: { type: String, required: true }
  });
  

const Category = mongoose.models.Category || new mongoose.model('Category', categorySchema);

module.exports = Category
  

  
  