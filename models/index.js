

// will make table essentially here with the models

const User = require('./User');
const Category = require('./Category');
const Bookings = require('./Bookings');

// will make table essentially here with the models


User.hasMany(Bookings, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE",'
});

Bookings.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = {User, Bookings}; 