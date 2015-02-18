var mongoose = require('./db');

var express = require('express');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));

var Fetcher = require('fetchr');
Fetcher.registerFetcher(require('./services/todos'));

app.use('/todos', Fetcher.middleware());

var appRouter = express.Router();
require('./routes/appRoutes')(appRouter);
app.use(appRouter);

module.exports = app;
