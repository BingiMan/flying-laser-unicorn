const { Router } = require('express');
const { Comment } = require('../models');
const commentRouter = Router();



commentRouter.get('/', async (req, res) => {
  const comments = await Comment.findAll();
  res.json({ comments });
});

commentRouter.post('/', async (req, res)=>{
  const comment = await Comment.create(req.body);
  res.json({comment})
})








module.exports = {
  commentRouter,
};