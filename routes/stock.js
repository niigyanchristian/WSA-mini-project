const express = require('express');
const { getStock } = require('../controllers/stock');

const router = express.Router()


router.route('/:id').
get(getStock);




module.exports=router;