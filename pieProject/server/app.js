require('dotenv').config(); //environment files

const express = require('express'); // creating express application
const app = express();


const pies = require('./controllers/piecontroller'); // importing controllers which hold logic
const user = require('./controllers/usercontroller');


const sequelize = require('./db'); //database

sequelize.sync(); //syncing to pg Admin
app.use(express.json()); // sending everything as Json data
app.use(require('./middleware/headers'));

// app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

// app.get('/',(req, res) => res.render('index'));

app.use('/pies', pies); //routes being established (Think of them in terms of what you put into link-)
app.use('/auth', user);

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));