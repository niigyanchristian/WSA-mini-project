const express = require('express');
const pool = require('../utils/connectMSQL');

const router = express.Router()


router.route('/').
get(async(req,res)=>{
    const data  =await pool.query('SELECT * FROM Products;');
    
    // console.log(data[0])
    res.json(data[0])
});

router.route('/:id').
get(async(req,res)=>{
    const id = req.params.id;
    const data =  await pool.query(`SELECT * FROM Products WHERE id = ${id};`)
    // res.json(data);
    console.log('====================================');
    console.log(data[0][0]);
    console.log('====================================');
    res.render('product',{product:data[0][0]});
})




module.exports=router;