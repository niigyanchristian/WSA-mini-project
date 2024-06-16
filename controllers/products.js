const Cart = require('../models/cart');
const Category = require('../models/category');
const Product = require('../models/product ');
const Region = require('../models/region');
const pool = require('../utils/connectMSQL');

exports.getHome = async(req,res)=>{
    try {
        // const data  =await pool.query('SELECT * FROM Products;');
        // const categories=await pool.query('SELECT * FROM Categories');
        // const regions=await pool.query('SELECT * FROM Regions');

        const categories =await Category.find({});
        const regions =await Region.find({});
        const data =await Product.find({});
        const cart = await Cart.find().populate('product_id').exec();
        
        res.render('home',{classifieds:data,categories:categories,regions:regions,cart:cart.length});
    } catch (error) {
        // res.status(500).send(error);
        
    }
}


exports.getProducts =async(req,res)=>{
// const data  =await pool.query('SELECT * FROM Products;');
    const data = await Product.find({});

    res.json(data);
}

exports.getProductById = async(req,res)=>{
    const id = req.params.id;
    // const data =  await pool.query(`SELECT * FROM Products WHERE id = ${id};`)

    const data = await Product.findById(id);
    const cart = await Cart.find().populate('product_id').exec();

    res.render('product',{product:data,cart:cart.length});
}