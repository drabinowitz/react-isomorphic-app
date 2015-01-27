var React = require('react');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var $ = require('jquery');

var todoActions = require('../actions/todoActions');
var todoStore = require('../stores/todoStore');

var MyApp = React.createClass({

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
      todoActions.get();
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
      text: this.state.todos.length
    });
  },

  render: function() {
    var Todos = [];
    for (var i = 0; i < this.state.todos.length; i++) {
      var todo = this.state.todos[i];
      Todos.push(
        <li key={todo._id}>{todo.text}</li>
      );
    }
    return (
      <div>
        <h1>{this.state.disabled ? 'This is the server rendering' : 'Now the app has fully loaded'}</h1>
        <Link to={'custom'}>Custom Link</Link>
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


module.exports = MyApp;
