//paso 6 controllers

var Participante = require('../models/participante.model');

exports.participante_create = function(req, res) {
  var participante = new Participante({
    nombre: req.body.nombre,
    departamento: req.body.departamento
  });

  participante.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send('El Participante se añadio de forma exitosa')
  })
};

exports.participante_details = function(req, res) {
  Participante.findById(req.params.id, function(err, participante) {
    if (err) return next(err);
    res.send(participante);
  })
};

exports.participante_update = function(req, res) {
  Participante.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function(err, participante) {
    if (err) return next(err);
    res.send('Participante modificado');
  });
};

exports.participante_delete = function(req, res) {
  Participante.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Eliminado el Participante');
  })
};
