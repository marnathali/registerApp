var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Chinaso = mongoose.model('Chinaso');

var RondaSchema = new Schema ({
  nombre: String,
  fecha_inicio: Date,
  fecha_fin: Date,
  ganador:{
    type: Schema.ObjectId,
    ref: 'Chinaso'
  }
});

// Export the model
module.exports = mongoose.model('Ronda', RondaSchema);
