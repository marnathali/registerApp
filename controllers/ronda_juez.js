var RondaJuez = require('../models/ronda_juez');


exports.rondaJuez_create = (req, res) => {
  console.log('POST RondaJuez/create');
  console.log(req.body);
  var rondaJuez = new RondaJuez({
    chinaso: req.body.chinaso,
    juez: req.body.juez,
    RondaJuez: req.body.RondaJuez,
    fecha: req.body.fecha
  });
  RondaJuez.save((err, rondaJuezStored )=> {
    if (err) res.status(500).send({message: `ocurrio un problema con este RondaJuez ${rondaJuezStored}`})

    res.send('Usted ha insertado un nuevo RondaJuez')
  })
  };



  exports.rondaJuez_details = (req, res) => {
    let rondaJueztId = req.params.id;
    RondaJuez.findById(rondaJueztId, (err, rondaJuez) =>{
      if (err) return res.status(500).send({message: `Ups, algo sucedio con este RondaJuez ${rondaJuez}`});
      if(!rondaJuez) return res.status(404).send({message: `NOT FOUND ${rondaJuez}`});
      res.send(rondaJuez);
    })
    .populate('ronda', 'nombre')
    .populate('juez', 'nombre')
    .exec((err, ronda, juez) => {
      console.log("el juez "+ juez + "partiipa en esta ronda "+ronda);
    })
  };

  exports.rondaJuez_all = (req, res) => {

    RondaJuez.find({}, (err, rondaJuezs) =>{
      if (err) return res.status(500).send({message: `ocurrio un problema ${rondaJuezs}`});
      if(!rondaJuezs) return res.status(404).send({message: `No los encuentrooo`});
      res.send(rondaJuezs);
    })
    .populate('ronda', 'nombre')
    .populate('juez', 'nombre')
    .exec((err, ronda, juez) => {
      console.log("el juez "+ juez + "participa en "+ronda);
    })
  };


  exports.rondaJuez_update = (req, res) =>{
    let rondaJuezId = req.params.id;
    let updated = req.body;

    RondaJuez.findOneAndUpdate(rondaJuezId, updated, (err, rondaJuez) => {
      if (err) return res.status(500).send({message: `No se actualizo el ${rondaJuez}`});

      res.send(rondaJuez);
    });
  };

  exports.rondaJuez_delete = (req, res)=> {
    let rondaJuezId = req.params.id;

    RondaJuez.findOneAndDelete(rondaJuezId, (err,  rondaJuez) =>{
      if (err) return res.status(500).send({message: `No se elimino ${rondaJuez}`});
      if(!rondaJuez) return res.status(404).send({message: `No encontrado${rondaJuez}`});
      res.send('Eliminado el Participante');
    })
  };
