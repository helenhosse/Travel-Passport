const express = require('express');
const path = require('path');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const session = require('express-session'); // confused on this part

const hbs = exphbs.create({}); // for handlebars but still don't get this, know I have to add more

const sequelize = require('./config/connection'); // importing the database connections
const { appendFile } = require('fs');

const app = express();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
const PORT = process.env.PORT || 3001;
// process.env.port is a setting in Heroku. We don't know what pot is going to use Heroku, so we need to grab from the enviroment variables 
// in Heroku

const sessionSettings = {
    secret: 'secret here',
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sessionSettings));


app.use(express.static(path.join(__dirname, 'public'))); 
// using the middleware to serve the files like .css and images, absolute path to the public folder

sequelize.sync({force:true}).then(() => {
    app.listenPORT, (() => {
        console.log(`App started in Port ${PORT}`);
    })
}); 


// sequelize sync will open the conenction to our database, and also will recreate the tables if force is set to true
//if force is set to true, sequelize will do a DROP tabel and CREATE table each time we run the application
// once the tabels have been created and populated (with seeds), change the force to false, so your data isn't lost

// remember that we want to see EXECUTING DEFAULT SELECT 1-1 AS RESULT

// we need to let expresss know that we are using handlebars for view