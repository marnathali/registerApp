var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ParticipanteSchema = new Schema({
  _id: Schema.Types.ObjectId,
  nombre: String,
  departamento: String
});

// Export the model
module.exports = mongoose.model('Participante', ParticipanteSchema);
