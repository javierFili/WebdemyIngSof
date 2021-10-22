const express = require('express');
const morgan = require('morgan');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 2000);

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