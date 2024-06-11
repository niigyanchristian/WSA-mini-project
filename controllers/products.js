const pool = require('../utils/connectMSQL');

exports.getHome = async(req,res)=>{
    try {
        const data  =await pool.query('SELECT * FROM Products;');
        const categories=await pool.query('SELECT * FROM Categories');
        const regions=await pool.query('SELECT * FROM Regions');

        console.log('====================================');
        console.log(data[0]);
        console.log('====================================');
    // if(classifieds && categories){
        res.render('index',{classifieds:data[0],categories:categories[0],regions:regions[0]});
    // }
    } catch (error) {
        res.status(500).send(error);
        
    }
}