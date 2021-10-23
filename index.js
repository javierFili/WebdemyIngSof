const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 2000);
app.engine('.hbs', exphbs({
    //defaultLayout: 'main', //página principal donde se encuentra HTML
    //layoutsDir: path.join(app.get('views'), 'layouts'), //layoutsDir tendrá la dirección de vista desde la carpeta "layouts" (Todas estas pertenecen a la carpeta views)
    //partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Global Variables

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/course'));
//Public

//Startin the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});