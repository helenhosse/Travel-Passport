const{Model, Datatypes}= require('sequelize');

class Bookings extends Model {}

Bookings.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
      
    },
    {
        sequelize,
        timestamps:false,
        freezeTableName: true,
        modelName: 'bookings',
    }
);

module.exports = Bookings;