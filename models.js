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

const Restaurant = sequelize.define('restaurant', {
  name: Sequelize.STRING,
  address: Sequelize.STRING,
  category: Sequelize.STRING,
  website: Sequelize.STRING,
  price_range: Sequelize.STRING
});

const Comment = sequelize.define('comment', {
  message: Sequelize.TEXT,
  yaynay: Sequelize.BOOLEAN,
  //creatorUserid: Sequelize.INTEGER
});

User.hasMany(Comment, { onDelete: 'cascade' });
User.hasMany(Restaurant)
Comment.belongsTo(User);
Restaurant.belongsTo(User);
Restaurant.hasMany(Comment, { onDelete: 'cascade' });
Comment.belongsTo(Restaurant);

module.exports = {
  sequelize,
  User,
  Restaurant,
  Comment,
};
