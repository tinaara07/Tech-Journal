const sequelize = require('../config/connection');
const { User, Journal } = require('../models');

const userData = require('./userData.json');
const journalData = require('./journalData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const journal of journalData) {
    await Journal.create({
      ...journal,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
