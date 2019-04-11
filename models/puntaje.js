var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Chinaso = require('../models/chinaso');
var Juez = require('../models/juez');

var PuntajeSchema = new Schema ({
	chinaso: {type: Schema.Types.ObjectId,
			ref: 'Chinaso'},
    juez: {type: Schema.Types.ObjectId,
    		ref: 'Juez'},
    puntaje: {type: Number,
			        min: 0, max: 5},
    fecha: Date

})

module.exports = mongoose.model('Puntaje', PuntajeSchema );
