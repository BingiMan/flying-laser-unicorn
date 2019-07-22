const { Router } = require('express');

const comments = Router();
const { Comment } = require('../models');


comments.get('/', async (req, res) => {
  const comments = await Comment.findAll();
  res.json({ comments });
});


module.exports = comments