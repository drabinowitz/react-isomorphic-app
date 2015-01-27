var Todo = require('../db/todo.model');

module.exports = {
  getAll: function () {
    return Todo.find({}).limit(300).exec();
  },
  add: function (todo) {
    return Todo.create(todo);
  }
};
