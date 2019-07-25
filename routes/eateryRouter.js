const { Router } = require('express');
const restaurants = Router();
const { Restaurant, Comment } = require('../models');
const { restrict, genToken, ownership } = require('../auth')

restaurants.get('/', async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.json({ restaurants });
});

restaurants.get('/:id', async (req, res) => {
  const restaurant = await Restaurant.findByPk(req.params.id);
  res.json({ restaurant })
});

restaurants.put('/:id', restrict, async (req, res) => {
  try {
    const refId = req.headers.user

    await Restaurant.update(
      req.body,
      {
        where: {
          id: req.params.id,
          userId: refId,
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

restaurants.post('/', restrict, async (req, res) => {
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

restaurants.delete('/:id', restrict, async (req, res) => {
  try {
    const id = req.params.id;
    const refId = req.headers.user

    const restaurant = await Restaurant.destroy(
      {
        where: {
          id,
          userId: refId,
        },
      },
    );
    res.json(restaurant);

  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
});

restaurants.post('/:id/comments', restrict, async (req, res) => {
  const data = req.body;
  const restaurant = await Restaurant.findByPk(req.params.id);
  const comment = await Comment.create(data);
  await comment.setRestaurant(restaurant);
  await comment.setUser(res.locals.user.id);
  res.json({ comment });
});


module.exports = restaurants;



