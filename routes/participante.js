var express = require('express');
var router = express.Router();
var participante_controller = require('../controllers/participante');


router.post('/create', participante_controller.participante_create);

router.get('/:id', participante_controller.participante_details);

router.get('/', participante_controller.participante_all);

router.put('/:id/update', participante_controller.participante_update);

router.delete('/:id/delete', participante_controller.participante_delete);


module.exports = router;
