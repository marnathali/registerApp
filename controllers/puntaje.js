var Puntaje = require('../models/puntaje');


exports.puntaje_create = (req, res) => {
  console.log('POST puntaje/create');
  console.log(req.body);
  var puntaje = new Puntaje({
    chinaso: req.body.chinaso,
    juez: req.body.juez,
    puntaje: req.body.puntaje,
    fecha: req.body.fecha
  });
  puntaje.save((err, puntajeStored )=> {
    if (err) res.status(500).send({message: `ocurrio un problema con este puntaje ${puntajeStored}`})

    res.send('Usted ha insertado un nuevo puntaje')
  })
  };



  exports.puntaje_details = (req, res) => {
    let puntajetId = req.params.id;
    Puntaje.findById(puntajetId, (err, puntaje) =>{
      if (err) return res.status(500).send({message: `Ups, algo sucedio con este puntaje ${puntaje}`});
      if(!puntaje) return res.status(404).send({message: `NOT FOUND ${puntaje}`});
      res.send(puntaje);
    })
    .populate('chinaso', 'contenido')
    .populate('juez', 'nombre')
    .exec((err, chinaso, juez) => {
      console.log("el juez "+ juez + "realizo un voto por el chinaso "+chinaso);
    })
  };

  exports.puntaje_all = (req, res) => {

    Puntaje.find({}, (err, puntajes) =>{
      if (err) return res.status(500).send({message: `ocurrio un problema ${puntajes}`});
      if(!puntajes) return res.status(404).send({message: `No los encuentrooo`});
      res.send(puntajes);
    })
    .populate('chinaso', 'contenido')
    .populate('juez', 'nombre')
    .exec((err, chinaso, juez) => {
      console.log("el juez "+ juez + "realizo un voto por el chinaso "+chinaso);
    })
  };


  exports.puntaje_update = (req, res) =>{
    let puntajeId = req.params.id;
    let updated = req.body;

    Puntaje.findOneAndUpdate(puntajeId, updated, (err, puntaje) => {
      if (err) return res.status(500).send({message: `No se actualizo el ${puntaje}`});

      res.send(puntaje);
    });
  };

  exports.puntaje_delete = (req, res)=> {
    let puntajeId = req.params.id;

    Puntaje.findOneAndDelete(puntajeId, (err,  puntaje) =>{
      if (err) return res.status(500).send({message: `No se elimino ${puntaje}`});
      if(!puntaje) return res.status(404).send({message: `No encontrado${puntaje}`});
      res.send('Eliminado el Participante');
    })
  };
