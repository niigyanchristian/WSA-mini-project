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
        
    // if(classifieds && categories){
        res.render('index',{classifieds:data,categories:categories,regions:regions});
    // }
    } catch (error) {
        // res.status(500).send(error);
        
    }
}


exports.getProducts =async(req,res)=>{
// const data  =await pool.query('SELECT * FROM Products;');
    const data = await Product.findById();

    res.json(data);
}

exports.getProductById = async(req,res)=>{
    const id = req.params.id;
    // const data =  await pool.query(`SELECT * FROM Products WHERE id = ${id};`)

    const data = await Product.findById(id);

    res.render('product',{product:data});
}