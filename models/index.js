const User = require('./User');
const Books = require('./Books');
const personalReadingList = require('./personalReadingList');
const blog = require('./blog');

User.hasMany(Books, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Books.belongsTo(User, {
    foreignKey: 'user_id'
});

personalReadingList.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, personalReadingList };