var express = require('express');
var router = express.Router();
var juez_controller = require('../controllers/juez.controller');


router.post('/create_juez', juez_controller.juez_create);

router.get('/:id/juez', juez_controller.juez_details);

router.put('/:id/update_juez', juez_controller.juez_update);

router.delete('/:id/delete_juez', juez_controller.juez_delete);


module.exports = router;
