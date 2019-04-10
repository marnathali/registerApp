//paso 6 controllers
var Chinaso = require('../models/chinaso');


exports.chinaso_create = function(req, res) {
  var chinaso = new Chinaso({
    contenido: req.body.contenido,
    autor: req.body.autor,
    capturador: req.body.capturador,
    fecha_registro: req.body.fecha_registro
  });

  chinaso.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send('Chinaso creado Upaaaa')
  })
};

   exports.chinaso_details = (req, res) => {
     let partId = req.params.id;
     Chinaso.findById(partId, (err, chinaso) =>{
       if (err) return res.status(500).send({message: `Ups, ocurrio un problemirijillo con el ${chinaso}`});
       if(!chinaso) return res.status(404).send({message: `A ti no te encuentro Bro ${chinaso}`});
       res.send(chinaso);
     })
     .populate('autor')
     .populate('capturador')
     .exec((err, autores, capturadores) => {
       console.log("El chinaso tiene " + autores + capturadores);
     })

   };

exports.chinaso_all = (req, res) => {

  Chinaso.find({}, (err, chinasos) =>{
    if (err) return res.status(500).send({message: `un problemas con los chinasos`});
    if(!chinasos) return res.status(404).send({message: `Not found chinasos`});
    res.send(chinasos);
  })
  .populate('autor')
  .populate('capturador')
  .exec((err, autores, capturadores) => {
    console.log("El chinaso tiene " + autores );
    console.log("El chinaso tiene " + capturadores );
  })
};

exports.chinaso_update = (req, res) =>{
  let partId = req.params.id;
  let updated = req.body;

  Chinaso.findOneAndUpdate(partId, updated, (err, chinaso) => {
    if (err) return res.status(500).send({message: `No se actualizo el ${chinaso}`});

    res.send(chinaso);
  });
};

exports.chinaso_delete = (req, res)=> {
  let partId = req.params.id;

  Chinaso.findOneAndDelete(partId, (err,  chinaso) =>{
    if (err) return res.status(500).send({message: `No se elimino ${chinaso}`});
    if(!participante) return res.status(404).send({message: `No encontrado${chinaso}`});
    res.send('Eliminado el chinaso');
  })
};
