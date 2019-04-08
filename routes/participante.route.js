var express = require('express');
var router = express.Router();
var participante_controller = require('../controllers/participante.controller');


router.post('/create_participante', participante_controller.participante_create);

router.get('/:id/participante', participante_controller.participante_details);

router.put('/:id/update_participante', participante_controller.participante_update);

router.delete('/:id/delete_participante', participante_controller.participante_delete);


module.exports = router;
