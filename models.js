const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'panda_eats',
  dialect: 'postgres',
  define: {
    underscored: true,
  },
});

const User = sequelize.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password_digest: Sequelize.STRING,
});

const Eatery = sequelize.define('eatery', {
  name: Sequelize.STRING,
  address: Sequelize.STRING,
  category: Sequelize.STRING,
  price_range: Sequelize.STRING,
});

const Comment = sequelize.define('comment', {
  message: Sequelize.TEXT,
  yaynay: Sequelize.BOOLEAN,

});

User.hasMany(Comment, { onDelete: 'cascade' });
Comment.belongsTo(User);
Eatery.belongsTo(User);
Eatery.hasMany(Comment, { onDelete: 'cascade' });
Comment.belongsTo(Eatery);

module.exports = {
  sequelize,
  User,
  Eatery,
  Comment,
};
