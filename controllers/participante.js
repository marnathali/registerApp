//paso 6 controllers

var Participante = require('../models/participante');

exports.participante_create = function(req, res) {
  console.log('POST participante/create');
  console.log(req.body);
  var participante = new Participante({
    nombre: req.body.nombre,
    departamento: req.body.departamento
  });

  participante.save((err, participanteStored )=> {
    if (err) res.status(500).send({message: `El no, porque no acepta juegooo ${participanteStored}`})

    res.send('Este si juega con nojostrooojs')
  })
};

exports.participante_details = (req, res) => {
  let partId = req.params.id;
  Participante.findById(partId, (err, participante) =>{
    if (err) return res.status(500).send({message: `Ups, ocurrio un problemirijillo con el ${participante}`});
    if(!participante) return res.status(404).send({message: `A ti no te encuentro Bro ${participante}`});
    res.send(participante);
  })
};

exports.participante_all = (req, res) => {

  Participante.find({}, (err, participantes) =>{
    if (err) return res.status(500).send({message: `ay llame a los participantes pero no vinieron`});
    if(!participantes) return res.status(404).send({message: `No los encuentrooo`});
    res.send(participantes);
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
