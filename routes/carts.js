const express = require('express');
const pool = require('../utils/connectMSQL');
const { getProductById } = require('../func/paroducts');
const router = express.Router()


router.route('/').
get(async(req,res)=>{
    const data=await pool.query(`
    SELECT Cart.id, Products.name, Cart.quantity, Products.price, Products.description
    FROM Cart
    JOIN Products ON Cart.product_id = Products.id;`)

    console.log(data[0])
    res.render('cart',{carts:data[0]})
}).
post(async(req,res)=>{
    const { quantity, product_id} = req.body;
    const data =await pool.query(`INSERT INTO  Cart (product_id, quantity) VALUES (${product_id}, ${quantity})`)

    res.redirect('/carts');
});

router.route('/add').
get(async(req,res)=>{
    const id = req.query.id;
    console.log(id)
    const categories=await pool.query('SELECT * FROM Categories');
    const regions=await pool.query('SELECT * FROM Regions');

    const product  =await getProductById(id);
    // if(classifieds && categories){

    console.log(product);
    
    res.render('cart',{categories:categories[0],regions:regions[0]});
    
});

router.route('/:id').
put(async(req,res)=>{
    const id = req.params.id;
    const quantity = req.body.quantity;
    console.log(id,quantity)
    await pool.query(`UPDATE Cart SET quantity = ${quantity} WHERE id = ${parseInt(id)};`)
    res.json([]);
}).
delete(async(req,res)=>{
    const id = req.params.id;
    const data = await pool.query(`DELETE FROM Cart WHERE id = ${parseInt(id)};`);
    console.log(data[0])
    res.json([]);
});




module.exports=router;