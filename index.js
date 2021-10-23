const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const mysql = require('mysql');
//const myConnection = require('express-myconnection'); //
//Initializations
const app = express();
//app.set('view engine','ejs');

//Settings
<<<<<<< HEAD
app.set('port', process.env.PORT || 2000); //en lugar del list app.set
=======
app.set('port', process.env.PORT || 2000);
app.engine('.hbs', exphbs({
    //defaultLayout: 'main', //página principal donde se encuentra HTML
    //layoutsDir: path.join(app.get('views'), 'layouts'), //layoutsDir tendrá la dirección de vista desde la carpeta "layouts" (Todas estas pertenecen a la carpeta views)
    //partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');
>>>>>>> trying

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