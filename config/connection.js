const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.heroku_site_name) {        // need to change this when I figure out the heroku site
    sequelize = new Sequelize(JAWSDB_URL);     // this will change too
} else {
    sequelize = new Sequelize (
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.JAWSDB_URL,     // this will change too, should look like JAWSDB_URL
            port: 3306,
            dialect: 'mysql',
        }
    );
}

module.exports = sequelize;