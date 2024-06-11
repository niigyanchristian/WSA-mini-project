const pool = require('../utils/connectMSQL');

exports.getProductById =async function(id){
    const data =  await pool.query(`SELECT * FROM Products WHERE id = ${id};`)
    return data[0];
}