const { Router } = require('express');
const userRouter = Router();
const { User } = require('../models');
const { genToken } = require('../auth');
const bcrypt = require('bcrypt');


userRouter.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json({ users });
});


userRouter.post('/', async (req, res) => {
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


userRouter.post('/login', async (req, res) => {
  const user = await User.findOne({ where: { name: req.body.user } });
  const isValid = await bcrypt.compare(req.body.password);

})





module.exports = {userRouter};