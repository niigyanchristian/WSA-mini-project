const express = require("express")
const bodyParser = require("express").json;
const bodyParserTwo = require("body-parser");

const productsRoute = require('./routes/products');
const cartsRoute = require('./routes/carts');
const stockRoute = require('./routes/stock');
const homeRoute = require('./routes/home');
const addRoute = require('./routes/add');
const filterRoute = require('./routes/filter');


const app = express()
app.set('view engine', 'ejs');
app.use(bodyParser());
app.use(bodyParserTwo.urlencoded({extended: true}));
app.use(express.static("public"));


app.use('/',homeRoute);
app.use('/products',productsRoute);
app.use('/carts',cartsRoute);
app.use('/stock',stockRoute);
app.use('/add',addRoute);
app.use('/filter',filterRoute);
// app.post('/filter',(req,res)=>{
//     console.log(req.body)
// })




app.listen(3000,()=>{
    console.log("WSA is listening to post 3000");
})