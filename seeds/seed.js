const sequelize = require('../config/connection');
const { personalReadingList, User, Books, blog } = require('../models');

const userData = require('./userData.json');
const prListData = require('./prListData.json');
const booksData = require('./booksData.json');
const blogData = require('./blog.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  await personalReadingList.bulkCreate(prListData, {
    returning: true,
  });

  await Books.bulkCreate(booksData, {
    returning: true,
  });

  await blog.bulkCreate(blogData, {
    returning: true,
  });


  process.exit(0);
};

seedDatabase();