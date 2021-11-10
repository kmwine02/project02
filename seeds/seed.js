const sequelize = require('../config/connection');
const { User, Contact } = require('../models');

const userData = require('./userData.json');
const contactData = require('./contactData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const contact of contactData) {
    await Contact.create({
      ...contact,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
