var React = require('react');
var Router = require('react-router');
var routes = require('../src/Router');
var generateIndexHtml = require('../client/generateIndexHtml');
var Fetcher = require('fetchr');
var todoActions = require('../actions/todoActions');
var initializer = require('../utils/initializer');

var todoStore = require('../stores/todoStore');
var todoController = require('../controller/todoController');

getCallback = function (req, res) {
  var fetcher = new Fetcher({
    xhrPath: '/todos',
    req: req
  });
  todoActions.fetcher = fetcher;
  Router.run(routes, req.url, function (Handler, state) {
    initializer.exec(state).then(function () {
      pageHtml = React.renderToString(React.createElement(Handler, null));
      pageHtml = generateIndexHtml(pageHtml, JSON.stringify(todoStore._todos), 'todos');
      res.send(pageHtml);
    });
  });
};

module.exports = function (app) {
  app.route('/*').get(getCallback);
};
