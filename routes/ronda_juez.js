var express = require('express');
var router = express.Router();

var rondaJuez_controller = require('../controllers/puntaje');


router.post('/create',  rondaJuez_controller.rondaJuez_create);
router.get('/:id', rondaJuez_controller.rondaJuez_details);
router.get('/', rondaJuez_controller.rondaJuez_all);
router.put('/:id/update', rondaJuez_controller.rondaJuez_update);
router.delete('/:id/delete',  rondaJuez_controller.rondaJuez_delete);

module.exports = router;
