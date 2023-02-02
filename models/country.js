/*const{Model, Datatypes}= require('sequelize');

class Country extends Model {}

Country.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        country_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        country_code:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    },
    {
        sequelize, 
        timestamps:false,
        freezeTableName: true,
        modelName: 'country',
    }
);

module.exports = Country;*/