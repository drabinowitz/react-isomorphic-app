var React = require('react');
var Router = require('react-router');
var routes = require('../src/Router');
var generateIndexHtml = require('../client/generateIndexHtml');

var todoStore = require('../stores/todoStore');
var todoController = require('../controller/todoController');

getCallback = function (req, res) {
  todoController.getAll().then(function (data) {
    var pageHtml;
    todoStore._todos = data;

    Router.run(routes, req.url, function (Handler) {
      pageHtml = React.renderToString(React.createElement(Handler, null));
      pageHtml = generateIndexHtml(pageHtml, JSON.stringify(data), 'todos');
      res.send(pageHtml);
    });
  });
};

module.exports = function (app) {
  app.route('/*').get(getCallback);
};
