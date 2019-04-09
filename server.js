var express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    bodyParser = require('body-parser');

var morgan = require('morgan');
var logger = require('./util/logging/winston-logger');

app.use(morgan('combined', {"stream": logger.stream}));
logger.debug("Overriding 'express' logger");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var customerRoutes = require('./routes/customer-route');
customerRoutes(app);

app.listen(port);
console.log(`Port: ${port}`);