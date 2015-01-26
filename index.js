var app = require('./server');

var port = 8000;
app.listen(port, function() {
  console.log('Server is listening on ' + port);
});
