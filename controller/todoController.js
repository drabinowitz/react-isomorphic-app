var Promise = require('bluebird');
var Todo = Promise.promisifyAll(require('../db/todo.model'));

module.exports = {
  getAll: function () {
    return Todo.findAsync({});
  },
  add: function (todo) {
    return Todo.createAsync(todo);
  }
};
