var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ParticipanteSchema = new Schema({
  nombre: String,
  departamento: String
});

// Export the model
module.exports = mongoose.model('Participante', ParticipanteSchema);
