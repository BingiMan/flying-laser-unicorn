const { Router } = require('express');
const eateries = Router();
const { Eatery } = require('../models');


eateries.get('/', async (req, res) => {
  const eateries = await Eatery.findAll();
  res.json({ eateries });
});








module.exports = eateries;