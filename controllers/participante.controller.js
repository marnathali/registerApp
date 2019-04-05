var Participante = require('../models/participante.model');


exports.participante_create = function(req, res){
  var participante = new Participante({
    nombre: req.body.nombre,
    departamento: req.body.departamento,
  });

  participante.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send('Participante añadido al juego')
  })
};
