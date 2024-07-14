const Cart = require("../models/cart");

exports.getCarts = async (req, res) => {
    try {
      const data = await Cart.find().populate('product_id').exec();
      const cartItems = data.map(item => ({
        id: item._id,
        name: item.product_id.name,
        quantity: item.quantity,
        price: item.product_id.price,
        description: item.product_id.description,
        image_path:item.product_id.image_path
      }));

      console.log(cartItems)

      res.render('cart', { carts: cartItems,cart:data.length });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  }


exports.postCart = async (req, res) => {
    const { quantity, product_id } = req.body;
    try {
      const cartItem = new Cart({ product_id, quantity });
      await cartItem.save();

      res.redirect('/carts');
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  }

exports.putCart = async (req, res) => {
    const id = req.params.id;
    const { quantity } = req.body;

    console.log(id,quantity);
    try {
      await Cart.findByIdAndUpdate(id, { quantity });

      res.json([]);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  }

exports.deleteCart = async (req, res) => {
    const id = req.params.id;
    try {
      await Cart.findByIdAndDelete(id);

      res.json([]);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  }