const Cart = require("../models/cart");
const Category = require("../models/category");
const Product = require("../models/product ");
const Region = require("../models/region");

module.exports = async function initializeDatabase() {
  try {
    // Clear existing collections
    await Category.deleteMany({});
    await Region.deleteMany({});
    await Product.deleteMany({});
    await Cart.deleteMany({});

    // Insert data into Categories collection
    const categories = await Category.insertMany([
      { name: 'Electronics', image_path: 'electronics.png' },
      { name: 'Furniture', image_path: 'home.png' },
      { name: 'Vehicles', image_path: 'vehicles.png' },
      { name: 'Real Estate', image_path: 'real-estate.png' },
      { name: 'Jobs', image_path: 'jobseekers.png' },
      { name: 'Services', image_path: 'beauty.png' },
      { name: 'Pets', image_path: 'animals.png' },
      { name: 'Mobile Phones & Tablet', image_path: 'mobile.png' },
      { name: 'Health & Beauty', image_path: 'beauty.png' },
      { name: 'Fashion', image_path: 'fashion.png' },
      { name: 'Sport, Arts & Outdoors', image_path: 'hobbies.png' },
    ]);

    // Insert data into Regions collection
    const regions = await Region.insertMany([
      { name: 'Greater Accra' },
      { name: 'Ashanti' },
      { name: 'Bono' },
      { name: 'Ahafo' },
      { name: 'Volta' },
    ]);

    // Insert data into Products collection
    const products = await Product.insertMany([
      {
        name: 'Smartphone',
        description: 'A high-end smartphone with 128GB storage',
        price: 699.99,
        stock_quantity: 50,
        category_id: categories[0]._id,
        region_id: regions[0]._id,
        image_path: 'iphone14promax.jpg'
      },
      {
        name: 'HP Laptop',
        description: 'HP Laptop with 16GB RAM, 512GB SSD.',
        price: 300.00,
        stock_quantity: 30,
        category_id: categories[1]._id,
        region_id: regions[2]._id,
        image_path: 'laptop2.jpg'
      },
      {
        name: 'HP Laptop',
        description: 'HP Laptop with 16GB RAM, 512GB SSD.',
        price: 300.00,
        stock_quantity: 30,
        category_id: categories[1]._id,
        region_id: regions[3]._id,
        image_path: 'laptop.jpg'
      },
      {
        name: 'Apple Monitor',
        description: 'Apple Monitor with 4K resolution.',
        price: 300.00,
        stock_quantity: 50,
        category_id: categories[0]._id,
        region_id: regions[0]._id,
        image_path: 'monitor-2004457_1280.png'
      },
      {
        name: 'Smartphone',
        description: 'A high-end smartphone with 128GB storage',
        price: 699.99,
        stock_quantity: 50,
        category_id: categories[0]._id,
        region_id: regions[0]._id,
        image_path: 'iphone14promax.jpg'
      }
    ]);

    // Insert data into Cart collection
    await Cart.create({ product_id: products[0]._id, quantity: 2 });

    console.log('DATABASE INITIALIZED...');
  } catch (err) {
    console.error('DATABASE INITIALIZATION ERROR:', err);
  } finally {
    // mongoose.connection.close();
  }
}