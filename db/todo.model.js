var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  text: {
    type: String
  }
});

module.exports = mongoose.model('Todo', TodoSchema);
