const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
//const myConnection = require('express-myconnection'); //
//Initializations
const app = express();
//app.set('view engine','ejs');

//Settings
app.set('port', process.env.PORT || 2000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Global Variables

//Routes
//app.use(require('./routes/index'));
//app.use(require('./routes/course')); //se usa la ruta
//app.use(require('./config/keys')); //sale error

//Public
app.use(express.static(path.join(__dirname, 'public')));

//Startin the server
app.listen(app.get('port'), () => {         //en aqui escuchamos el puerto
    console.log('Server on port', app.get('port'));
});