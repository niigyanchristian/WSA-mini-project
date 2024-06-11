const express = require('express');
const router = express.Router()
const pool = require('../utils/connectMSQL');
const { getHome } = require('../controllers/products');

router.route('/')
.get(getHome)


module.exports = router;