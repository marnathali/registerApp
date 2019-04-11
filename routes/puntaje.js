var express = require('express');
var router = express.Router();

var puntaje_controller = require('../controllers/puntaje');


router.post('/create',  puntaje_controller.puntaje_create);
router.get('/:id', puntaje_controller.puntaje_details);
router.get('/', puntaje_controller.puntaje_all);
router.put('/:id/update', puntaje_controller.puntaje_update);
router.delete('/:id/delete',  puntaje_controller.puntaje_delete);

module.exports = router;
