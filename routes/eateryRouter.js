const { Router } = require('express');
const restaurants = Router();
const { Restaurant, Comment } = require('../models');
const { restrict, genToken } = require('../auth')

restaurants.get('/', async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.json({ restaurants });
});

restaurants.get('/:id', async (req, res) => {
  const restaurant = await Restaurant.findByPk(req.params.id);
  res.json({ restaurant })
});

restaurants.put('/:id', async (req, res) => {
  try {
    await Restaurant.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
      },
    );
    const restaurant = await Restaurant.findByPk(req.params.id);
    res.json(restaurant);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
});

restaurants.post('/', async (req, res) => {
  const { name, address, priceRange, website, category } = req.body;
  const restaurant = await Restaurant.create({
    name: name,
    address: address,
    price_range: priceRange,
    website: website,
    category: category,
  });
  await restaurant.setUser(res.locals.user.id);
  res.json({ restaurant });
});

restaurants.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const restaurant = await Restaurant.destroy(
      {
        where: {
          id,
        },
      });
    res.json(restaurant);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
});

restaurants.post('/:id/comments', async (req, res) => {
  const data = req.body;
  const restaurant = await Restaurant.findByPk(req.params.id);
  const comment = await Comment.create(data);
  await comment.setRestaurant(restaurant);
  await comment.setUser(res.locals.user.id);
  res.json({ comment });
})


module.exports = restaurants;



