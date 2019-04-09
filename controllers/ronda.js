var Ronda = require('../models/ronda');



exports.ronda_create = function(req, res) {
  var ronda = new Ronda({
    nombre: req.body.nombre,
    fecha_inicio: req.body.fecha_inicio,
    fecha_fin: req.body.fecha_fin,
    ganador: req.body.ganador
});

  ronda.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send('ronda creado ')
  })
};




exports.ronda_details = (req, res, next, id) => {
  Ronda.findById(id)
    .populate('ganador')
    .exec()
    .then(ronda => {
      if (ronda) {
        req.ronda = ronda;
        next();
      } else {
        res.json({
          "message": "ronda not found"
        });
      }
    })
    .catch(err => {
      next(new Error(err));
    });
};


exports.ronda_update = function(req, res) {
  Ronda.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function(err, ronda) {
    if (err) return next(err);
    res.send('Ronda actualizada');
  });
};

exports.ronda_delete = function(req, res) {
  Ronda.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('ronda eliminada');
  })
};
