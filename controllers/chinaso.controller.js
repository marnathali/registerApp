//paso 6 controllers

var Chinaso = require('../models/chinaso.model');


exports.chinaso_create = function (req, res) {
    var chinaso = new Chinaso(
        {
          contenido: req.body.contenido,
          autor: req.body.autor,
          capturador: req.body.capturador,
          fecha_registro: req.body.fecha_registro,
          puntaje: req.body.puntaje
          }
    );

    chinaso.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Chinaso creado Upaaaa')
    })
};

exports.chinaso_details = function (req, res) {
    Chinaso.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(chinaso);
    })
};

exports.chinaso_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, chinaso) {
        if (err) return next(err);
        res.send('Te updatearon el chinaso. Upaaaaa');
    });
};

exports.chinaso_delete = function (req, res) {
    Chinaso.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully! upaaaaa');
    })
};
