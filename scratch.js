const { Restaurant, Comment } = require('./models');


const main = async () => {
  await Restaurant.destroy({
    where: {},
  });
  await Comment.destroy({
    where: {},
  });

  const rest1 = await Restaurant.create({
    name: 'Berry 21',
    address: '922 Broadway, New York, Ny 10010',
    catergory: 'deli',
    website: 'http://wwwberry21.com',
    price_range: '2',
  });

  const rest2 = await Restaurant.create({
    name: 'Xi\'an Famous Foods',
    address: '38 E 23rd St, New York, NY 10010',
    catergory: 'chinese',
    website: 'https://www.xianfoods.com',
    price_range: '2',
  });

  const rest3 = await Restaurant.create({
    name: 'Snowfox',
    address: '24 E 23rd St, New York, NY 10010',
    catergory: 'Asian',
    website: 'https://www.snowfoxcafe.com',
    price_range: '2',
  });

  const rest4 = await Restaurant.create({
    name: 'Gramercy Tavern',
    address: '2 E 20th St, New York, NY 10003',
    catergory: 'American',
    website: 'gramercytavern.com',
    price_range: '5',
  });

  const rest5 = await Restaurant.create({
    name: 'Cosme',
    address: '35 E 21st St, New York, NY 10010',
    catergory: 'American',
    website: 'https://www.cosmenyc.com',
    price_range: '3',
  });


  const comment1 = await Comment.create({
    message: 'High traffic lunch spot with pretty good selection of fresh food',
    yaynay: 't',
  });

  const comment2 = await Comment.create({
    message: 'salmon was bland.',
    yaynay: 'n',
  });

  const comment3 = await Comment.create({
    message: 'friendly staff',
    yaynay: 'y',
  });

  const comment4 = await Comment.create({
    message: 'my favorite spot',
    yaynay: 'y',
  });

  const comment5 = await Comment.create({
    message: 'pricey but worth every single penny.',
    yaynay: 'y',
  });


  await comment1.setRestaurant(rest1);
  await comment2.setRestaurant(rest1);
  await comment3.setRestaurant(rest2);
  await comment4.setRestaurant(rest3);
  await comment5.setRestaurant(rest5);
};

main();

