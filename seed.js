const { User, Eatery, Comment } = require('./models');

const main = async () => {
  await User.destroy({
    where: {}
  });
  await Eatery.destroy({
    where: {}
  });
  await Comment.destroy({
    where: {}
  });

  const userOne = await User.create({
    name: 'Misty',
    email: 'pokemans@ketchum.meh',

  })








}