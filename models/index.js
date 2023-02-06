

// will make table essentially here with the models

const User = require('./User');
const Travel = require('./Travel');

// will make table essentially here with the models


User.hasMany(Travel, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE",'
});

Travel.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = {User, Travel}; 