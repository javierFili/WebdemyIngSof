const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
//const myConnection = require('express-myconnection'); //
//Initializations
const app = express();
//app.set('view engine','ejs');

//Settings
app.set('port', process.env.PORT || 2000); //en lugar del list app.set

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Global Variables

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/course')); //se usa la ruta
//app.use(require('./config/keys')); //sale error
//Public

//Startin the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});