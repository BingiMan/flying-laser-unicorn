const { Router } = require('express');
const users = Router();
const { User } = require('../models');


users.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json({ users });
});








module.exports = users;