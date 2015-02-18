var appDispatcher = require('../dispatcher/appDispatcher');
var todoConstants = require('../constants/todoConstants');

module.exports = {
  get: function () {
    this.fetcher.read('todos', {}, {}, function (err, result) {
      appDispatcher.dispatch({
        action: {
          type: todoConstants.GET,
          body: result
        }
      });
    }.bind(this));
  },
  add: function (todo) {
    this.fetcher.create('todos', todo, {}, {}, function (err, result) {
      appDispatcher.dispatch({
        action: {
          type: todoConstants.ADD,
          body: result
        }
      });
    }.bind(this));
  }
};
