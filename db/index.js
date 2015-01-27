var mongoose = require('mongoose');
var db = {};

mongoose.connect('mongodb://localhost/react-isomorphic-app');
var todoModel = require('./todo.model');
db.Todo = mongoose.model('Todo');

module.exports = db;
