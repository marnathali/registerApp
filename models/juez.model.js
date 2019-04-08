var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JuezSchema = new Schema({
  nombre: String,
  alias: String,
  departamento: String,
});

module.exports = mongoose.model('Juez', JuezSchema);
