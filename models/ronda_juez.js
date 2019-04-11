var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Ronda = require('../models/ronda');
var Juez = require('../models/juez');

var RondaJuezSchema = new Schema ({
	  juez: {type: Schema.Types.ObjectId,
    		ref: 'Juez'},
    ronda: {type: Schema.Types.ObjectId,
    		ref: 'Ronda'},


})

module.exports = mongoose.model('RondaJuez', RondaJuezSchema );
