const { Restaurant, Comment, User } = require('./models');

const main = async () => {
  await User.destroy({
    where: {},
  });
  await Restaurant.destroy({
    where: {},
  });
  await Comment.destroy({
    where: {},
  });

  const testUser1 = await User.create({
    name: 'test',
    pw_digest: 'test',
    email: 'test@test.test'
  });

  const testUser2 = await User.create({
    name: 'test2',
    pw_digest: 'test2',
    email: 'test2@test.test'
  })

  const rest1 = await Restaurant.create({
    name: 'Berry 21',
    address: '922 Broadway, New York, Ny 10010',
    category: 'deli',
    website: 'http://wwwberry21.com',
    price_range: '2',
  });

  const rest2 = await Restaurant.create({
    name: 'Xi\'an Famous Foods',
    address: '38 E 23rd St, New York, NY 10010',
    category: 'chinese',
    website: 'https://www.xianfoods.com',
    price_range: '2',
  });

  const rest3 = await Restaurant.create({
    name: 'Snowfox',
    address: '24 E 23rd St, New York, NY 10010',
    category: 'Asian',
    website: 'https://www.snowfoxcafe.com',
    price_range: '2',
  });

  const rest4 = await Restaurant.create({
    name: 'Gramercy Tavern',
    address: '2 E 20th St, New York, NY 10003',
    category: 'American',
    website: 'gramercytavern.com',
    price_range: '5',
  });

  const rest5 = await Restaurant.create({
    name: 'Cosme',
    address: '35 E 21st St, New York, NY 10010',
    category: 'American',
    website: 'https://www.cosmenyc.com',
    price_range: '3',
  });


  const comment1 = await Comment.create({
    message: 'High traffic lunch spot with pretty good selection of fresh food',
    yaynay: 't',
  });

  const comment2 = await Comment.create({
    message: 'salmon was bland.',
    yaynay: 'f',
  });

  const comment3 = await Comment.create({
    message: 'friendly staff',
    yaynay: 't',
  });

  const comment4 = await Comment.create({
    message: 'my favorite spot',
    yaynay: 't',
  });

  const comment5 = await Comment.create({
    message: 'pricey but worth every single penny.',
    yaynay: 't',
  });

  await comment1.setUser(testUser1);
  await comment2.setUser(testUser2);
  await comment3.setUser(testUser1);
  await comment4.setUser(testUser2);
  await comment5.setUser(testUser1);
  await rest1.setUser(testUser1);
  await rest2.setUser(testUser1);
  await rest3.setUser(testUser1);
  await rest4.setUser(testUser2);
  await rest5.setUser(testUser1);

  await comment1.setRestaurant(rest1);
  await comment2.setRestaurant(rest1);
  await comment3.setRestaurant(rest2);
  await comment4.setRestaurant(rest3);
  await comment5.setRestaurant(rest5);
};

main();






