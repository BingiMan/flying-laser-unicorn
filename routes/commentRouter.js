const { Router } = require('express');
const { restrict, genToken } = require('../auth')

const comments = Router();
const { Comment } = require('../models');


comments.get('/', async (req, res) => {
  const comments = await Comment.findAll();
  res.json({ comments });
});

comments.put('/:id', restrict, async (req, res) => {
  try {
    const id = req.params.id;
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


comments.post('/', restrict, async (req, res) => {
  const { message, yeanay } = req.body
  const comment = await Comment.create({
    message: 'meepbeep',
    yaynay: false,
  });
  res.json({ comment })
})

module.exports = comments