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




exports.ronda_details = (req, res) => {
  let rondaId = req.params.id;
  Ronda.findById(rondaId, (err, ronda) =>{
    if (err) return res.status(500).send({message: `Ups, algo sucedio  ${ronda}`});
    if(!ronda) return res.status(404).send({message: `NOT FOUND ${ronda}`});
    res.send(ronda);
  })
  .populate('ganador')
  .exec((err, ganador) => {
    console.log("el gandor de esta ronda fue: "+ganador);
  })
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
