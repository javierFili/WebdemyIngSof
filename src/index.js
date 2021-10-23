const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');



const { database } = require('./keys.js');

// Intializations
const app = express();
//require('./lib/passport');

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views')); //muestra la ubicacion


app.engine('.hbs', exphbs({     //se utilisa como bosquejo
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'), //layauts esta dentro de views
  partialsDir: path.join(app.get('views'), 'partials'), //es para mostrar cosas parciales
  extname: '.hbs',
  helpers: require('./lib/handlebars') //para usar funciones extras
}))
app.set('view engine', '.hbs');


// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json()); //configurar para recibir .jasons


// Global variables


// Routes
app.use(require('./routes/index'));
app.use(require('./routes/authentication')); //
app.use('/links', require('./routes/links')); //a donde se redirijiran la rutas

// Public
app.use(express.static(path.join(__dirname, 'public'))); //direccion rutas

// Starting
app.listen(app.get('port'), () => {
  console.log('el servidor esta en el puerto', app.get('port'));
});
