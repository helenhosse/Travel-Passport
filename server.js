const express = require('express');
const path = require('path');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const session = require('express-session'); 
const helpers = require('./utils/helpers');


const sequelize = require('./config/connection'); // importing the database connections
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();

const PORT = process.env.PORT || 3001;
// process.env.port is a setting in Heroku. We don't know what pot is going to use Heroku, so we need to grab from the enviroment variables 
// in Heroku
const hbs = exphbs.create({ helpers }); // for handlebars but still don't get this, know I have to add more

const sess = {
    secret: 'secret here',
    cookie: {
        maxAge: 800,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 

// using the middleware to serve the files like .css and images, absolute path to the public folder
app.use(routes);

sequelize.sync({force:true}).then(() => {
   app.listen(PORT, () => {
      console.log(`App started in Port ${PORT}`);
    })
}); 

// sequelize.sync({ force: false }).then(() => {
 //    app.listen(PORT, () => console.log('Now listening'));
// });


// sequelize sync will open the conenction to our database, and also will recreate the tables if force is set to true
//if force is set to true, sequelize will do a DROP tabel and CREATE table each time we run the application
// once the tabels have been created and populated (with seeds), change the force to false, so your data isn't lost

// remember that we want to see EXECUTING DEFAULT SELECT 1-1 AS RESULT

// we need to let expresss know that we are using handlebars for view