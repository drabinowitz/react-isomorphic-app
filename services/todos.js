var todoController = require('../controller/todoController');
var initializer = require('../utils/initializer');

module.exports = {
  name: 'todos',

  read: function (req, resource, params, config, callback) {
    var readPromise = todoController.getAll().then(function (result) {
      callback(null, result);
    });
    initializer.register(readPromise);
  },

  create: function (req, resource, params, body, config, callback) {
    todoController.add(params).then(function (result) {
      callback(null, result);
    });
  }
};
