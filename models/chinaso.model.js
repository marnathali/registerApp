var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Participante = require('../models/participante.model');


var ChinasoSchema = new Schema({
  contenido: String,
  autor:{
    type: Schema.ObjectId,
    ref: 'Participante'
  },
  capturador: {
    type: Schema.ObjectId,
    ref: 'Participante'
  },
  fecha_registro: Date
});

// Export the model
module.exports = mongoose.model('Chinaso', ChinasoSchema);
