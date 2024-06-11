const express = require('express');
const router = express.Router()
const pool = require('../utils/connectMSQL');
const { postFilter } = require('../controllers/controllers');

router.route('/')
.post(postFilter)


module.exports = router;