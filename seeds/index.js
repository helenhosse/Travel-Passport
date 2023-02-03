const sequelize  = require('../config/connection');
const { Category, User } = require('../models');    // need help with models but this is needed to connect 
const activities = require('./activities.json');

const seedDatabase = async() => {
    await sequelize.sync({ force: true });
    await Activity.bulkCreate(activities); // lets us have multiple users and different categories at once

    await User.create ({
        name: 'Helen',
        email: 'helenhosse@gmail.com',
        password: 'passwordhere',
    });
};

seedDatabase();