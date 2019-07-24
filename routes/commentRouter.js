const { Router } = require('express');
const { restrict, genToken } = require('../auth')

const comments = Router();
const { Comment, Restaurant } = require('../models');


comments.get('/', async (req, res) => {
  const comments = await Comment.findAll();
  res.json({ comments });
});

comments.put('/:id', restrict, async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const data = req.body;
    await Comment.update(
      data,
      {
        where: {
          id,
        },
      });
    const comment = await Comment.findByPk(id);
    res.json(comment);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
});


// comments.post('/', async (req, res) => {
//   const { id, ...data } = req.body;
//   const restaurant = await Restaurant.findByPk(id);
//   const comment = await Comment.create(data);
//   await restaurant.setRestaurant(comment);
//   // await restaurant.setUser(res.locals.user.id);
//   res.json({ comment });
// });



// below added by Tibby Tuesday night for UI , sorry git szar
comments.get('/:id', async (req, res) => {
  const comments = await Comment.findAll({
    where: {
      restaurant_id: req.params.id,
    },
  });
  res.json({ comments });
});
comments.delete('/:id', async (req, res) => {
  const comments = await Comment.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ comments });
});
// above added by Tibby Tuesday night for UI, sorry Luis


module.exports = comments;