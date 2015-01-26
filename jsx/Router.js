var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var TodoView = require('./TodoView');

var Custom = require('./Custom');

var routes = (
  <Route handler={TodoView} path='/'>
    <Route handler={Custom} path='/custom' name='custom' />
  </Route>
)


if (typeof window !== "undefined") {
  Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.getElementById('content'));
  });
} else {
  module.exports = routes;
}
