var React = require('react');

var Router = require('react-router');
var moment = require('moment');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var todoActions = require('../actions/todoActions');
var todoStore = require('../stores/todoStore');

var nouns = ['cow', 'moon', 'dog', 'person', 'isomorphic react app', 'flower', 'bunny', 'snowshoe', 'dr.octopus', 'the unbearable lightness of being'];
var verbs = ['fights', 'jumps over', 'runs past', 'dances with', 'falls in love with', 'catches', 'believes in'];

var initializerMixin = require('../utils/initializer').generateMixin(function (params) {
  todoActions.get();
});

var TodoView = React.createClass({
  mixins: [initializerMixin],

  getInitialState: function () {
    return {todos: todoStore.getAll(), disabled: true};
  },

  storeCallback: function () {
    this.setState({
      todos: todoStore.getAll()
    });
  },

  componentDidMount: function () {
    todoStore.addChangeListener(this.storeCallback);
    if (window && !window.isInitialLoad) {
      this.initialize();
    } else {
      window.isInitialLoad = false;
    }
    this.setState({disabled: false});
  },

  componentWillUnmount: function () {
    todoStore.removeChangeListener(this.storeCallback);
  },

  handleClick: function () {
    todoActions.add({
      text: nouns[Math.floor(Math.random() * (nouns.length))] + ' ' + verbs[Math.floor(Math.random() * (verbs.length))] + ' ' + nouns[Math.floor(Math.random() * (nouns.length))]
    });
  },

  render: function() {
    var Todos = [];
    for (var i = this.state.todos.length - 1; i >= 0; i--) {
      var todo = this.state.todos[i];
      Todos.push(
        <li className='todo-item' key={todo._id}>
          <span className='todo-text'>Todo: {todo.text}</span>
          <span className='todo-date'>Created At: {moment(todo.createdAt).fromNow()}</span>
        </li>
      );
    }
    return (
      <div>
        <h1>{this.state.disabled ? 'This is the server rendering' : 'Now the app has fully loaded'}</h1>
        <Link to={'custom'}>Custom Link</Link>
        <br />
        <Link to={'other'}>Other Link</Link>
        <RouteHandler />
        <br />
        <br />
        <button onClick={this.handleClick} disabled={this.state.disabled}>Add Item</button>
        <ul>
          {Todos}
        </ul>
      </div>
    );
  },
});


module.exports = TodoView;
