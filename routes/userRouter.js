const { Router } = require('express');
const users = Router();
const { User } = require('../models');
const { genToken, restrict } = require('../auth');
const bcrypt = require('bcrypt');


users.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json({ users });
});


users.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const pwDigest = await bcrypt.hash(password, 7);
  const user = await User.create({
    name: name,
    email: email,
    password_digest: pwDigest,
  });
  const token = genToken({ name: user.name, email: user.email, id: user.id })

  res.json({ user, token })
  // console.log(token)
});


users.post('/login', async (req, res) => {
  const { name } = req.body;
  const user = await User.findOne({ where: { name } });
  const isValid = await bcrypt.compare(req.body.password, user.password_digest);
  if (isValid === true) {
    const token = genToken({ name: user.name, email: user.email, id: user.id })

    res.json({ user, token })
  } else {
    console.log(e.message)
  }

})





module.exports = users;