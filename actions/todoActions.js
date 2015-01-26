var appDispatcher = require('../dispatcher/appDispatcher');
var todoConstants = require('../constants/todoConstants');
var $ = require('jquery');

module.exports = {
 get: function () {
    $.ajax({
      url: '/todos',
      success: function (result) {
        appDispatcher.dispatch({
          action: {
            type: todoConstants.GET,
            body: result
          }
        });
      }.bind(this)
    });

  },
  add: function (todo) {
    $.ajax({
      url: '/todos',
      type: 'POST',
      data: todo,
      success: function (result) {
        appDispatcher.dispatch({
          action: {
            type: todoConstants.ADD,
            body: result
          }
        });
      }.bind(this)
    });
  }
};
