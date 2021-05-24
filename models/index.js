const User = require('./User');
const Books = require('./Books');
const personalReadingList = require('./personalReadingList');
const blog = require('./blog');

// blog.hasMany(User, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

User.hasOne(personalReadingList, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

personalReadingList.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, personalReadingList, Books, blog };