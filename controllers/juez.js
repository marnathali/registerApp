//paso 6 controllers

var Juez = require('../models/juez');

exports.juez_create = function(req, res) {
  console.log('POST juez/create');
  console.log(req.body);
  var juez = new Juez({
    nombre: req.body.nombre,
    alias:  req.body.alias,
    departamento: req.body.departamento
  });

  juez.save((err, juezStored )=> {
    if (err) res.status(500).send({message: `Estejuez no ingreso ${juezStored}`})

    res.send('Exito,  el juez ingresa al juego')
  })
};

exports.juez_details = (req, res) => {
  let partId = req.params.id;
  Juez.findById(partId, (err, juez) =>{
    if (err) return res.status(500).send({message: `Ups, ocurrio un problema ${juez}`});
    if(!juez) return res.status(404).send({message: `Not found ${juez}`});
    res.send(juez);
  })
};

exports.juez_all = (req, res) => {

  Juez.find({}, (err, juezs) =>{
    if (err) return res.status(500).send({message: `Un problema con los jueces`});
    if(!juezs) return res.status(404).send({message: `No encontrados`});
    res.send(juezs);
  })
};


exports.juez_update = (req, res) =>{
  let partId = req.params.id;
  let updated = req.body;

  Juez.findOneAndUpdate(partId, updated, (err, juez) => {
    if (err) return res.status(500).send({message: `No se actualizo el ${juez}`});

    res.send(juez);
  });
};

exports.juez_delete = (req, res)=> {
  let partId = req.params.id;

  Juez.findOneAndDelete(partId, (err, juez) =>{
    if (err) return res.status(500).send({message: `No se elimino ${juez}`});
    if(!juez) return res.status(404).send({message: `No encontrado${juez}`});
    res.send('Eliminado el juez');
  })
};
