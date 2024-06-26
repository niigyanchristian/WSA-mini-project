const Product = require('../models/product ');
const pool =require('../utils/connectMSQL');


exports.postFilter = async (req, res) => {
  const { category, region, price } = req.body;

  let query = {};

  if (category && category !== 'all') {
    query.category_id = category;
  }
  if (region && region !== 'all') {
    query.region_id = region;
  }
  if (price && price !== 'all') {
    const [minPrice, maxPrice] = price.split('-').map(Number);
    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      query.price = { $gte: minPrice, $lte: maxPrice };
    }
  }

  try {
    const data = await Product.find(query).exec();
    res.json(data);
  } catch (err) {
    console.error('Error fetching filtered classifieds:', err);
    res.status(500).send('Internal Server Error');
  }
};
