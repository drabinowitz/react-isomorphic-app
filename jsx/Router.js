var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var TodoView = require('./TodoView');
var Custom = require('./Custom');
var Other = require('./Other');

var routes = (
  <Route handler={TodoView} path='/' name='home'>
    <Route handler={Custom} path='/custom' name='custom' />
    <Route handler={Other} path='/other' name='other' />
  </Route>
)


if (typeof window !== "undefined") {
  var Fetcher = require('fetchr');
  var todoActions = require('../actions/todoActions');
  var fetcher = new Fetcher({
    xhrPath: '/todos'
  });
  todoActions.fetcher = fetcher;
  Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.getElementById('content'));
  });
} else {
  module.exports = routes;
}
