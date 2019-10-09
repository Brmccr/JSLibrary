require('dotenv').config();//1 

let express = require('express'); //1 use of the express npm package installed
let app = express(); //2 express function - Allows us to create an Express app
let test= require('./controllers/testcontroller');
let authTest = require('./controllers/authtestcontroller');


let user = require('./controllers/usercontroller');
let sequelize = require('./db');

sequelize.sync(); // tip pass in {force: true} for resetting tables
app.use(express.json());

app.use(require('./middleware/headers'));

//exposed routes
app.use('/test', test);
app.use('/api/user', user);

// app.use('/api/user', require('./controllers/usercontrollers'));

//protected routes since they will pass middleware/validate-session
// anything beneath that will be protected - ex /authtest
app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);

//3 app.listen      //4
app.listen(3000, function(){
    console.log('App is listening on 3000.') //5 
});

app.use('/api/test', function(req, res){
    res.send("This is data from the /api/test endpoint. It's from the server.");
});

