const User = require('./User');
const Journal = require('./Journal');
const Comment = require('./Comment');

User.hasMany(Journal, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Journal.belongsTo(User, {
  foreignKey: 'user_id'
});

Journal.hasMany(Comment, {
  foreignKey: 'journal_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Journal, {
  foreignKey: 'journal_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = { User, Journal, Comment};
