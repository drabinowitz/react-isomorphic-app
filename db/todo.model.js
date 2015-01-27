var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  text: {
    type: String
  }
});

TodoSchema.plugin(timestamps);

module.exports = mongoose.model('Todo', TodoSchema);
