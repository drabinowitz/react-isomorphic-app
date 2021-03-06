var mongoose = require('./db');

var express = require('express');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));

var todoRouter = express.Router();
require('./routes/todoRoutes')(todoRouter);
app.use('/todos', todoRouter);

var appRouter = express.Router();
require('./routes/appRoutes')(appRouter);
app.use(appRouter);

module.exports = app;
