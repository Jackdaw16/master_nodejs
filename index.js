'use strict';
const express = require('express');
const cors = require('cors');
const config = require('./config');
const bodyParser = require('body-parser');
const employedRoutes = require('./routes/employed-routes');

const app = express();

//Middlewares (funciones que se ejecutan antes de que lleguen a las rutas)
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', employedRoutes.routes);

//Starting the server
app.listen(config.port, () => {
   console.log('Server on port', config.port)
});
