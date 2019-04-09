//paso 6 controllers

var Juez = require('../models/juez');

exports.juez_create = function(req, res) {
  var juez = new Juez({
    nombre: req.body.nombre,
    alias: req.body.alias,
    departamento: req.body.departamento
  });

  juez.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send('El juez se añadio de forma exitosa')
  })
};

exports.juez_details = function(req, res) {
  Juez.findById(req.params.id, function(err, juez) {
    if (err) return next(err);
    res.send(juez);
  })
};

exports.juez_update = function(req, res) {
  Juez.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function(err, juez) {
    if (err) return next(err);
    res.send('Juez modificado');
  });
};

exports.juez_delete = function(req, res) {
  Juez.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Eliminado el juez');
  })
};
