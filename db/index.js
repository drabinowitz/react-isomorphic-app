var mongoose = require('mongoose');
var db = {};

mongoose.connect('mongodb://localhost/reactisomorphicapp');
var todoModel = require('./todo.model');
db.Todo = mongoose.model('Todo');

module.exports = db;
