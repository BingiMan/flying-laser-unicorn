const { Router } = require('express');
const eateries = Router();
const { Eatery } = require('../models');


eateries.get('/', async (req, res) => {
  const eateries = await Eatery.findAll();
  res.json({ eateries });
});

eateries.post('/', async (req, res) => {
  const { name, address, priceRange, category } = req.body;
  const eatery = await Eatery.create({
    name: name,
    address: address,
    price_range: price_range,
    category: category,
  })
  res.json({ eatery })
})






module.exports = {
  eateries,
}




