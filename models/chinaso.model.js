var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ChinasoSchema = new Schema({
  contenido: String,
  autor: String,
  capturador: String,
  puntaje: {
    type: Number,
    min: 1,
    max: 5
  },
});

// Export the model
module.exports = mongoose.model('Chinaso', ChinasoSchema);
