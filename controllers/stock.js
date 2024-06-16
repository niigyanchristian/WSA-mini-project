const Product = require("../models/product ");

exports.getStock = async(req,res)=>{
    const id = req.params.id;

    // const data =  await pool.query(`SELECT * FROM Products WHERE id = ${id};`)
    const data = await Product.findById(id,{stock_quantity:1});
    res.status(200).json(data);
}