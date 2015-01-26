var appDispatcher = require('../dispatcher/appDispatcher');

var todoConstants = require('../constants/todoConstants');

var assign = require('object-assign');

var EventEmitter = require('eventemitter').EventEmitter;

var todoData = [];

if (typeof window !== 'undefined') {
  todoData = window.todos;
}

var todoStore = assign({}, EventEmitter.prototype, {
  _todos: todoData,

  emitChange: function () {
    this.emit('CHANGE');
  },

  addChangeListener: function (callback) {
    this.addListener('CHANGE', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('CHANGE', callback);
  },

  getAll: function () {
    return this._todos;
  },

  add: function (todo) {
    this._todos.push(todo);
    this.emitChange();
  },

  get: function (todos) {
    this._todos = todos;
    this.emitChange();
  }
});

appDispatcher.register(function (payload) {
  var actionType = payload.action.type;
  var actionBody = payload.action.body;
  if (actionType === todoConstants.GET) {
    todoStore.get(actionBody);
  } else if (actionType === todoConstants.ADD) {
    todoStore.add(actionBody);
  }
});

module.exports = todoStore;
