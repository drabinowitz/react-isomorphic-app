var todoController = require('../controller/todoController');

module.exports = function (app) {
  app.route('/')
  .get(function (req, res) {
    todoController.getAll().then(function (data) {
      res.json(data);
    });
  })
  .post(function (req, res) {
    todoController.add(req.body).then(function (data) {
      res.json(data);
    });
  });
};
