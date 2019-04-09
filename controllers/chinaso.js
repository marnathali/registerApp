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

exports.chinaso_details = (req, res, next, id) => {
  Chinaso.findById(id)
  populate('autor').
  populate('capturador').
  exec()
    .then(chinaso => {
      if (chinaso) {
        req.chinaso = chinaso;
        next();
      } else {
        res.json({
          "message": "chinaso not found"
        });
      }
    })
    .catch(err => {
      next(new Error(err));
    });
};

exports.chinaso_all = (req, res, next)=> {
  Chinaso.find()
    .populate('autor capturador')
    .exec()
    .then( chinasos => {
        res.json(chinasos);
    })
    .catch( err => {
        next(new Error(err));
    });
};



exports.chinaso_update = function(req, res) {
  Chinaso.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, function(err, chinaso) {
    if (err) return next(err);
    res.send('Te updatearon el chinaso. Upaaaaa');
  });
};

exports.chinaso_delete = function(req, res) {
  Chinaso.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Deleted successfully! upaaaaa');
  })
};
