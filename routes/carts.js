const express = require('express');
const { getCarts, postCart, putCart, deleteCart } = require('../controllers/carts');
const router = express.Router();

// Get all items in the cart
router.route('/')
  .get(getCarts)
  .post(postCart);


// Update an item in the cart
router.route('/:id')
  .put(putCart)
  .delete(deleteCart);

module.exports = router;